import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importando AppComponent
import { DinosaurQuizComponent } from './dinosaur-quiz/dinosaur-quiz.component'; // Importando DinosaurQuizComponent

@NgModule({
  declarations: [
    // Remover o AppComponent de 'declarations'
  ],
  imports: [
    BrowserModule,
    AppComponent, // Importando o AppComponent aqui, já que é standalone
    DinosaurQuizComponent, // Se o DinosaurQuizComponent também for standalone, faça o mesmo
  ],
  bootstrap: [AppComponent],
  schemas: [] // Se necessário, adicione CUSTOM_ELEMENTS_SCHEMA aqui
})
export class AppModule {}
