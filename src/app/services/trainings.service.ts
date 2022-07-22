import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Training } from '../model/training.model';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http: HttpClient) { }

  public getTrainings(){
    return this.http.get<Training[]>(environment.host+"/trainings");
  }

  public getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(environment.host+"/categories");
  }

  public getTrainingsByCategoryId(catId:number){
    return this.http.get<Training[]>(environment.host+"/categories/"+ catId + "/trainings");
  }

 // public postTraining(training:any){
  //  return this.http.post<Training>(environment.host+"/trainings", training);
  //}

  public getNewTraining(){
    return this.http.post<Training>(environment.host+"/trainings",new Training(0,"","",100,1));
  }
}
