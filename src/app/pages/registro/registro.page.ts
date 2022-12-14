import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from '@firebase/util';
import { AlertController, IonButton, LoadingController } from '@ionic/angular';

import { Camera, CameraResultType } from '@capacitor/camera';
import { Usuario } from 'src/app/services/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  pageTitle = 'Iniciar sesion';
  credentials!: FormGroup;
  loading :HTMLIonLoadingElement;
  cliente :Usuario ={
    uid: '',
    name: '',
    lastname: '',
    gender: '',
    age: 0,
    email: '',
    comuna: 0,
    rut: '',
    disponible: false,
    image: ''
  }
  newFile:any;

  constructor(
    private formBuilder:FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    private  usuarioService:UsuarioService
  ) { }

  ngOnInit() {
    this.createForm();
  }


  get email(){
    return this.credentials?.get('email');
  }

  get password(){
    return this.credentials?.get('password');
  }
  get name(){
    return this.credentials.get('name');
  }
  get age()
  {
    return this.credentials.get('age')
  }
 

  createForm(){
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name:['',[Validators.required, Validators.minLength(4)]],
      age:['',[Validators.required, Validators.maxLength(2)]],

    })
  }
  
  async register(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.register(this.credentials.value.email,this.credentials.value.password);
    await loading.dismiss();
   
    if(user){
      
        if(this.cliente.name !=='')
        {
          const uid =await this.authService.getid();
          this.cliente.uid =uid;
          console.log(uid);
          this.guardarUser();
          this.router.navigateByUrl('/home');
        }
        else{
          this.alertPresent('Existen campos vacios','Revice antes de guardar')
        }
      
     
 
      
    }
    else{
      this.alertPresent('Registro fallido','Revise bien los datos ingresado e inténtelo nuevamente más rato...');
    }
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.login(this.credentials.value.email,this.credentials.value.password);
    await loading.dismiss();
    const uid =await this.authService.getid();
    console.log(uid);

    if(user){
      
      this.router.navigateByUrl('/home');
    }
    else{
      this.alertPresent('Ingreso fallido','Revise bien los datos ingresado e inténtelo nuevamente más rato...');
    }
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons: ['OK']
    });
    alert.present();
  }
  async guardarUser()
  {
    const path = 'usuarios';
    this.cliente.name= this.credentials.value.name;
    this.cliente.email= this.credentials.value.email;
    this.cliente.age=this.credentials.value.age;
    

    const name = this.cliente.name;
    if(this.newFile !== undefined){
      const rest = await this.usuarioService.addUsuario(this.newFile, path,this.cliente.uid);
      
    }
    if(this.cliente.name !==''  && this.cliente.email!=='' && this.cliente.age>0)
    {
      this.usuarioService.addUsuario(this.cliente,path ,this.cliente.uid).then( res =>{
        console.log("guardado");
     }).catch(error =>{
 
     });
    }else{
      console.log("sin nombre")
    }
    
    
  }

  imagen: any
 
  async takePhoto(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
  
    const imageUrl = image.base64String
    this.cliente.image = 'data:image/jpeg;base64,' + imageUrl
  };

}
