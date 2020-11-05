import { TestComponentComponent } from './test-component/test-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: {depth: 1} },

  { path: 'RestrictiveSerasa', loadChildren: () => import('./restritivo-serasa/restritivo-serasa.module').then(m => m.RestritivoSerasaModule) },
  { path: 'RestrictiveSPC', loadChildren: () => import('./restrictive-spc/restrictive-spc.module').then(m => m.RestrictiveSpcModule) },
  { path: 'MotivoRecusa', loadChildren: () => import('./motivo-recusa/motivo-recusa.module').then(m => m.MotivoRecusaModule) },
  { path: 'ParametroAnalise', loadChildren: () => import('./parametro-analise/parametro-analise.module').then(m => m.ParametroAnaliseModule) },
  { path: 'Mensagens', loadChildren: () => import('./mensagem/mensagem.module').then(m => m.MensagemModule) },
  { path: 'Modelos', loadChildren: () => import('./modelo/modelo.module').then(m => m.ModeloModule) },
  { path: 'ReceitaFederal', loadChildren: () => import('./receita-federal/receita-federal.module').then(m => m.ReceitaFederalModule) },
  { path: 'ScoreSPC', loadChildren: () => import('./score-spc/score-spc.module').then(m => m.ScoreSPCModule) },
  { path: 'MalaPA', loadChildren: () => import('./mala-pa/mala-pa.module').then(m => m.MalaPaModule) },
  { path: 'Simulation', loadChildren: () => import('./simulation/simulation.module').then(m => m.SimulationModule) },
  { path: 'test', component:TestComponentComponent}


 
 
/*  
{ path: 'inclusionReviewParammeters', component: InclusionReviewParammetersComponent, canActivate: [AuthGuard], data: {depth: 3} },
  { path: 'editionModelReview', component: EditionModelReviewComponent, canActivate: [AuthGuard], data: {depth: 3} },
  { path: 'inclusionAnalysisModelRules', component: InclusionAnalysisModelRulesComponent, canActivate: [AuthGuard],  data: {depth: 3}},
  { path: 'inclusionContingencyModel', component: InclusionContingencyModelComponent, canActivate: [AuthGuard], data: {depth: 3}},
  { path: 'detailContingency', component: DetailContingencyComponent, canActivate: [AuthGuard], data: {depth: 3} },   
  { path: 'listAssociatedProcess', component: ListAssociatedProcessComponent, canActivate: [AuthGuard],  data: {depth: 2}},
  { path: 'listContingency', component: ListContingencyComponent, canActivate: [AuthGuard],  data: {depth: 2}},
  { path: 'listAnalysisModelRules', component: ListAnalysisModelRulesComponent, canActivate: [AuthGuard], data: {depth: 2} },
  { path: 'listModelReview', component: ListModelReviewComponent, canActivate: [AuthGuard], data: {depth: 2} },
  { path: 'detailReviewResult', component: DetailReviewResultComponent , canActivate: [AuthGuard], data: {depth: 3}}, 
*/
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
