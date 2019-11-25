import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { from } from 'rxjs';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { AuthGuard } from 'auth.guard';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard]},
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
