import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-search-movies-page',
  standalone: true,
  imports: [NavBarComponent, InputComponent, ButtonComponent],
  templateUrl: './search-movies-page.component.html',
  styleUrl: './search-movies-page.component.scss'
})
export class SearchMoviesPageComponent {

}
