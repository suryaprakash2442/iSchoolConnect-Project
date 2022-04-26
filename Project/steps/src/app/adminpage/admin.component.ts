import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { AuthenticationService } from "src/app/authentication.service";


import { PostsService } from "../posts/posts.service"; 
import { CreateService } from "../posts/post-create/create.service";
import { UserCreateService } from "src/app/register/user.service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent{
    title = 'admin-comp';
    curUser$ = this.authService.currentUser$
    

    enteredTitle = '';
    enteredContent = '';
    
cloth :any;
clothType?:string;
clothColor?:string;
clothCount?:number;
clothStatus?:string = "Processing"
clothUserId?: string = ""
message:string;

    constructor(public createService:CreateService,
        public postsService:PostsService,
        public userCreateService:UserCreateService,
        public authService:AuthenticationService){}


    ngOnInit(){
        this.createService.get_Allposts().subscribe(data =>{
            this.cloth = data.map((e:any) =>{
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    type: e.payload.doc.data()['type'],
                    color: e.payload.doc.data()['color'],
                    count: e.payload.doc.data()['count'],
                    status: e.payload.doc.data()['status'],
                    userid: e.payload.doc.data()['userid']
                }
            })
            // console.log(this.cloth)
            
        })
        
    }
    
    
    createRecord(){
        let record = {};
        record['type'] = this.clothType;
        record['color'] = this.clothColor;
        record['count'] = this.clothCount;
        record['status'] = this.clothStatus;
        record['userid'] = this.clothUserId;
        // console.log(record);
        

        this.createService.create_Newpost(record).then(res => {
            this.clothType = "";
            this.clothColor = "";
            this.clothCount = undefined;
            this.clothStatus = "Processing";
            this.clothUserId = "";
            // console.log(res);
            this.message = "Saved!"
        }).catch(error => {
            console.log(error);
            
        })
    }
    
        onAddPost(form: NgForm){
          
        if(form.invalid){
            return;
        }
        this.postsService.addPost(form.value.clothType,form.value.clothColor,form.value.clothCount,this.clothStatus!,this.clothUserId!)
        form.resetForm()
    }
    

    editRecord(record)
    {
        record.isEdit = true;
        record.editType = record.type;
        record.editColor = record.color;
        record.editCount = record.count;
        record.editStatus = record.status;

    }

    updateRecord(recorddata)
    {
        let record2 = {};
        let update = this.createService.updateCloth(recorddata.id);
        // this.createService.updateCloth(recorddata.id);
        update.subscribe()
        recorddata.isEdit = false;
    }
    
    deleteRecord(record_id)
    {
        this.createService.deleteEmployee(record_id)
    }
    
    curUserName(){
        return 'John'
    }
}