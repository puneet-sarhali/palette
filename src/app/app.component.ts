import { Component, HostListener, OnInit } from '@angular/core';
import themeData from './themeData';
import { DataService } from './services/data.service';
import { Palette } from './models/palette';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any | null = null;
  innerWidth = 0;
  selectedPalette: any;
  savedPalettes: Array<number>

  viewClicked = {
    id: 4,
    name: "Portfolio",
    img: "portfolio.png"
  };

  constructor(private dataService: DataService) {
    this.changeTheme(themeData[0]);
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
    this.dataService.getPalettes().then((palettes) => {
      this.data = palettes.data;
      if (palettes.data) {
        this.selectedPalette = palettes.data[0];
        this.changeTheme(palettes.data[0])
      }

      console.log(this.data);
    });

    this.savedPalettes = this.dataService.getSavedPalettes();
  }

  async ngOnInit(): Promise<void> {
    //await this.insertPalette();
  }

  // async insertPalette() {
  //   try {
  //     await this.dataService.insertPalette({
  //       bg: "#EEEBDD",
  //       bgFocus: "#DFD3C3",
  //       primaryClear: "#810000",
  //       primaryDull: "#598EF3",
  //       primaryVisible: "#D3E6FE",
  //       accentClear: "#d946ef",
  //       accentDull: "#fae8ff",
  //       clear: "#cbd5e1",
  //       dull: "#94a3b8",
  //       duller: "#475569",
  //       likes: 0
  //     })
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  private changeTheme(data: any) {
    this.changeVar("--bg", data.bg);
    this.changeVar("--bg-focus", data["bgFocus"]);
    this.changeVar("--primary-clear", data["primaryClear"]);
    this.changeVar("--primary-dull", data["primaryDull"]);
    this.changeVar("--primary-visible", data["primaryVisible"]);
    this.changeVar("--accent-clear", data["accentClear"]);
    this.changeVar("--accent-dull", data["accentDull"]);
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

  async onSaved($event: number) {
    try {
      await this.dataService.incrementLike($event);
    } catch (err) {
      console.log(err);
    }
    this.dataService.addToSaved($event);
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
