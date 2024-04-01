import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { StudentsDataService } from '../students-data.service';
import { mohithItEmail } from './email.validator';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public studentsData:any=[];

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    gender: new FormControl(null,[Validators.required]),
    mobile: new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl(null,[Validators.required,Validators.email,mohithItEmail]),
    batch: new FormControl(null,[Validators.required]),
    address: new FormGroup({
      city: new FormControl(null,[Validators.required]),
      mandal: new FormControl(null,[Validators.required]),
      district: new FormControl(null,[Validators.required]),
      state: new FormControl(null,[Validators.required]),
      pincode: new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    education: new FormArray([]),
    company: new FormGroup({
      name1: new FormControl(null,[Validators.required]),
      location: new FormControl(null,[Validators.required]),
      package: new FormControl(null,[Validators.required]),
      offerDate: new FormControl(null,[Validators.required])
    }),
    sourceType: new FormControl(),
  })

  constructor(private _studentsDataService:StudentsDataService) {
    this.studentForm.get('sourceType')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'direct') {
          // add Social Media
          this.studentForm.addControl('sourceFrom', new FormControl());
          // remove referral name
          this.studentForm.removeControl("referral");
        }
        else {
          // add Social Media
          this.studentForm.addControl('referral', new FormControl());
          // remove soiurce from
          this.studentForm.removeControl("sourceFrom");
        }
      }
    )
  }

  get educationFormArray() {
    return this.studentForm.get('education') as FormArray;
  }

  addEducation() {
    this.educationFormArray.push(
      new FormGroup({
        qualification: new FormControl(null, [Validators.required]),
        year: new FormControl(null,[Validators.required]),
        percentage: new FormControl(null,[Validators.required])
      })
    )
  }

  delete(i: number) {
    this.educationFormArray.removeAt(i);
  }


  submit() {
    // console.log(this.studentForm.value);
    // this.studentForm.markAllAsTouched();
    this._studentsDataService.studentForm(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Successfully Student Form Created");
        // after create the student form refresh the page
        this.studentForm.reset();
      },
      (err:any)=>{
        alert("Student Form Creation Failed");
      }
    )
  }

}
