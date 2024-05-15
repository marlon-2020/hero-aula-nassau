import { Component, OnInit } from '@angular/core';
import { HeroService } from './servicos/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private hero: HeroService){}

  listaHerois!: any
  ngOnInit(): void {
    this.hero.getLista().subscribe({
      next: (data: any)=>{
        console.log(data)
        this.listaHerois = data
      },
      error: (error: any)=>{
        console.log(error)
      }
    })
  }
  
}
