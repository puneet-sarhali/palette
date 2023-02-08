import { Component, HostListener } from '@angular/core';
import themeData from './themeData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = themeData;
  innerWidth = 0;
  selectedPalette = themeData[0];
  viewClicked = {
    id: 7,
    name: "Portfolio",
    img: "portfolio.png"
  };

  constructor() {
    this.changeTheme(themeData[0])
  }

  private changeTheme(data: any) {
    // this.changeVar("--my-primary-100", data.primary[100]);
    // this.changeVar("--my-primary-200", data.primary[200]);
    // this.changeVar("--my-primary-300", data.primary[300]);
    // this.changeVar("--my-primary-400", data.primary[400]);
    // this.changeVar("--my-primary-500", data.primary[500]);
    // this.changeVar("--my-primary-600", data.primary[600]);
    // this.changeVar("--my-primary-700", data.primary[700]);
    // this.changeVar("--my-primary-800", data.primary[800]);
    // this.changeVar("--my-primary-900", data.primary[900]);
    // this.changeVar("--my-accent-100", data.accent[100]);
    // this.changeVar("--my-accent-200", data.accent[200]);
    // this.changeVar("--my-accent-300", data.accent[300]);
    // this.changeVar("--my-accent-400", data.accent[400]);
    // this.changeVar("--my-accent-500", data.accent[500]);
    // this.changeVar("--my-accent-600", data.accent[600]);
    // this.changeVar("--my-accent-700", data.accent[700]);
    // this.changeVar("--my-accent-800", data.accent[800]);
    // this.changeVar("--my-accent-900", data.accent[900]);
    // this.changeVar("--my-gray-100", data.gray[100]);
    // this.changeVar("--my-gray-200", data.gray[200]);
    // this.changeVar("--my-gray-300", data.gray[300]);
    // this.changeVar("--my-gray-400", data.gray[400]);
    // this.changeVar("--my-gray-500", data.gray[500]);
    // this.changeVar("--my-gray-600", data.gray[600]);
    // this.changeVar("--my-gray-700", data.gray[700]);
    // this.changeVar("--my-gray-800", data.gray[800]);
    // this.changeVar("--my-gray-900", data.gray[900]);
    this.changeVar("--bg", data.bg);
    this.changeVar("--bg-focus", data["bg-focus"]);
    this.changeVar("--primary-clear", data["primary-clear"]);
    this.changeVar("--primary-dull", data["primary-dull"]);
    this.changeVar("--primary-visible", data["primary-visible"]);
    this.changeVar("--accent-clear", data["accent-clear"]);
    this.changeVar("--accent-dull", data["accent-dull"]);
    this.changeVar("--clear", data["clear"]);
    this.changeVar("--dull", data["dull"]);
    this.changeVar("--duller", data["duller"]);


  }
  private changeVar(from: string, to: string) {
    document.documentElement.style.setProperty(from, to);
  }

  onThemeChange($event: any) {
    this.changeTheme($event);
    this.selectedPalette = $event;
  }

  visibleViews: { id: number, name: string, img: string }[] | null = [
    {
      id: 3,
      name: "Mobile App",
      img: "remember_me"
    },
    {
      id: 4,
      name: "Dashboard",
      img: "dashboard"
    },
    {
      id: 6,
      name: "Portfolio",
      img: "assignment_ind"
    },
    {
      id: 7,
      name: "Landing Page",
      img: "flight_land"
    },
  ]

  allViews = [
    {
      id: 3,
      name: "Mobile App",
      img: "remember_me"
    },
    {
      id: 4,
      name: "Dashboard",
      img: "dashboard"
    },
    {
      id: 6,
      name: "Portfolio",
      img: "assignment_ind"
    },
    {
      id: 7,
      name: "Landing Page",
      img: "flight_land"
    },
  ]

  mobileViews = [{

  }]

  onViewClicked(view: { id: number, name: string, img: string }) {
    this.viewClicked = view;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: number) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1024) {
      this.visibleViews = null;
      this.viewClicked = {
        id: 3,
        name: "Mobile App",
        img: "remember_me"
      };
    } else {
      this.visibleViews = this.allViews;
    }
  }
}
