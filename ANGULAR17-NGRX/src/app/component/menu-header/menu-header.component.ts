import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../_module/Material.Module';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.scss'
})
export class MenuHeaderComponent {

}

