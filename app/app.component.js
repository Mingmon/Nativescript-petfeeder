"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = /** @class */ (function () {
    // Your TypeScript logic goes here
    function AppComponent() {
        this.text = "off";
        this.isShow = false;
        this.light = 0;
        firebase.init({}).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    }
    AppComponent.prototype.on = function () {
        this.isShow = !this.isShow;
        var Time = new Date();
        if (this.isShow) {
            this.text = "on";
            this.light = 0;
        }
        else {
            this.text = "off";
            this.light = 1;
        }
        //set data to  firebase
        firebase.setValue('/light', {
            switch: this.light,
            time: Time.toString()
        });
        firebase.push('/log', {
            switch: this.light,
            time: Time.toString()
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFLekQ7SUFDRSxrQ0FBa0M7SUFDbEM7UUFlQSxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFdBQU0sR0FBYSxLQUFLLENBQUM7UUFDekIsVUFBSyxHQUFZLENBQUMsQ0FBQztRQWhCakIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUdiLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxRQUFRO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQ0YsQ0FBQztJQUVKLENBQUM7SUFLRCx5QkFBRSxHQUFGO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLFFBQVEsQ0FBQyxRQUFRLENBQ2YsUUFBUSxFQUNSO1lBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2xCLElBQUksRUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLFFBQVEsQ0FBQyxJQUFJLENBQ1gsTUFBTSxFQUNOO1lBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2xCLElBQUksRUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztJQUVBLENBQUM7SUEvQ1UsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDOztPQUNXLFlBQVksQ0FtRHhCO0lBQUQsbUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgIH0pLnRoZW4oXG4gICAgICBpbnN0YW5jZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICB9XG4gICAgKTtcblxuICB9XG5cbiAgdGV4dCA6IHN0cmluZyA9IFwib2ZmXCI7XG4gIGlzU2hvdyA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGlnaHQgOiBudW1iZXIgPSAwO1xuICBvbigpe1xuICAgIHRoaXMuaXNTaG93ID0gIXRoaXMuaXNTaG93O1xuICAgIHZhciBUaW1lID0gbmV3IERhdGUoKTtcbiAgICBpZiAodGhpcy5pc1Nob3cpIHtcbiAgICAgIHRoaXMudGV4dCA9IFwib25cIjtcbiAgICAgIHRoaXMubGlnaHQgPSAwO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy50ZXh0ID0gXCJvZmZcIjtcbiAgICAgIHRoaXMubGlnaHQgPSAxO1xuICAgIH1cbiBcbiAgICAvL3NldCBkYXRhIHRvICBmaXJlYmFzZVxuICAgIGZpcmViYXNlLnNldFZhbHVlKFxuICAgICAgJy9saWdodCcsXG4gICAgICB7XG4gICAgICAgIHN3aXRjaDogdGhpcy5saWdodCxcbiAgICAgICAgdGltZSA6IFRpbWUudG9TdHJpbmcoKVxuICAgICAgfVxuICApO1xuICBmaXJlYmFzZS5wdXNoKFxuICAgICcvbG9nJyxcbiAgICB7XG4gICAgICBzd2l0Y2g6IHRoaXMubGlnaHQsXG4gICAgICB0aW1lIDogVGltZS50b1N0cmluZygpXG4gICAgfVxuKTtcbiAgXG4gIH0gIFxuXG5cblxufVxuXG5cbiJdfQ==