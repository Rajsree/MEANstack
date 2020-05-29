import { Component } from '@angular/core'

//decorator so as angular to understand
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html' //add relative path to the tmeplate file
})

//class is ts feature to create blueprint for object. Angular will then create and instantiate object
export class PostCreateComponent { //component name in file name with individualwords in capital
}
