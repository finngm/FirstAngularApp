import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  disableButton = true;
  serverCreationStatus = 'no server created!';
  serverName = 'The Server';

  constructor() { 
    setTimeout(() => {
      this.disableButton = false;
    }, 3000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server created! Name of server is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    //this.serverName = (<HTMLInputElement>event.target).value;
  }

}
