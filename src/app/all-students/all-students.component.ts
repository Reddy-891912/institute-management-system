import { Component } from '@angular/core';
import { StudentsDataService } from '../students-data.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {

  public studentFilter: string = '';
  public studentsPageNo: number = 0;
  public allStudents: any = [];

  constructor(private _studentsDataService: StudentsDataService) {
    this._studentsDataService.getStudentsData('data').subscribe(
      (data: any) => {
        this.allStudents = data;
        // alert("Students Data reflected");
      },
      (err: any) => {
        alert("Students data failed");
      }
    )
  }

  filterStudentsData() {
    this._studentsDataService.getFilterStudentsData(this.studentFilter).subscribe(
      (data: any) => {
        this.allStudents = data;
      },
      (err: any) => {
        alert("Students Data Filter Failed");
      }
    )
  }

  getPagedStudentsData() {
    this._studentsDataService.getPagedStudentsData(this.studentsPageNo).subscribe(
      (data:any)=>{
        this.allStudents=data;
      },
      (err:any)=>{
        alert("Students Data Failed");
      }
    )
   }

  deletedData(id: any) {
    this._studentsDataService.getDeleteData(id).subscribe(
      (data: any) => {
        alert("Successfully row deleted");
        location.reload();
      },
      (err: any) => {
        alert("Delete Failed");
      }
    )
  }

}
