var app = new (function () {
  this.el = document.getElementById("cars");

  this.cars = [
    {
      id: 1,
      pic: "./IMG/car.jpeg",
      carBrand: "Toyota",
      model: "Avanza",
      color: "#7143B6",
      age: 2018,
      price: 250000,
    },
    {
      id: 2,
      pic: "./IMG/car.jpeg",
      carBrand: "Nissan",
      model: "March",
      color: "#FAFA10",
      age: 2018,
      price: 250000,
    },
    {
      id: 3,
      pic: "./IMG/car.jpeg",
      carBrand: "Volkswagen",
      model: "Sedan",
      color: "#00FCDB",
      age: 2018,
      price: 250000,
    },
    {
      id: 4,
      pic: "./IMG/car.jpeg",
      carBrand: "Suzuki",
      model: "Swift",
      color: "#002AFC",
      age: 2018,
      price: 250000,
    },
    {
      id: 5,
      pic: "./IMG/car.jpeg",
      carBrand: "General Motors",
      model: "Tracker",
      color: "#F100FC",
      age: 2018,
      price: 250000,
    },
  ];

  this.Count = function (data) {
    var el = document.getElementById("counter");
    var name = "car";

    if (data) {
      if (data > 1) {
        name = "cars";
      }
      el.innerHTML = "Inventory:  " + data + " " + name;
    } else {
      el.innerHTML = "Inventory: " + "No " + name + "s";
    }
  };

  this.FetchAll = function () {
    var data = "";

    if (this.cars.length > 0) {
      for (i = 0; i < this.cars.length; i++) {
        data += "<tr>";
        data +=
          '<td> <img class="rounded" src="./IMG/car.jpeg" height="40" width="60"></img></td>';
        data += "<td>" + this.cars[i].carBrand + "</td>";
        data += "<td>" + this.cars[i].model + "</td>";
        data +=
          '<td style="background-color: ' + this.cars[i].color + '"></td>';
        data += "<td>" + this.cars[i].age + "</td>";
        data +=
          '<td style="currency"> $' +
          this.cars[i].price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) +
          "</td>";
        data +=
          '<td><button class="btn btn-danger me-md-2" onclick="app.Edit(' +
          i +
          ')"><i class="far fa-edit font-size-icon"></i></button><button class="btn btn-success  me-md-2" onclick="app.Delete(' +
          i +
          ')"><i class="far fa-trash-alt font-size-icon"></i></button></td>';

        data += "</tr>";
      }
    }

    this.Count(this.cars.length);
    return (this.el.innerHTML = data);
  };

  this.Add = function () {
    var pic = "./IMG/car.jpeg";
    var carBrand = document.getElementById("add-brand").value;
    var model = document.getElementById("add-model").value;
    var color = document.getElementById("add-color").value;
    var age = document.getElementById("add-year").value;
    var price = document.getElementById("add-price").value;
    var id = cars.length + 1;
    // Get the value
    //var country = el.value;

    // Add the new value
    //this.cars.push(country.trim());
    if (carBrand) {
      const newCar = {
        pic,
        id,
        carBrand,
        model,
        color,
        age,
        price,
      };
      // Edit

      this.cars.push(newCar);
      document.getElementById("add-brand").value = "";
      document.getElementById("add-model").value = "";
      document.getElementById("add-color").value = "#002AFC";
      document.getElementById("add-year").value = "";
      document.getElementById("add-price").value = "";
      // Display the new list
      this.FetchAll();
      // Hide fields
      //CloseInput();
    }
  };

  this.Edit = function (item) {
    var pic = "./IMG/car.jpeg";
    var brand = document.getElementById("edit-brand");
    var model = document.getElementById("edit-model");
    var color = document.getElementById("edit-color");
    var year = document.getElementById("edit-year");
    var price = document.getElementById("edit-price");

    // Display value in the field
    brand.value = this.cars[item].carBrand;
    model.value = this.cars[item].model;
    color.value = this.cars[item].color;
    year.value = this.cars[item].age;
    price.value = this.cars[item].price;
    // Display fields
    document.getElementById("spoiler").style.display = "block";
    self = this;

    document.getElementById("saveEdit").onsubmit = function () {
      // Get value
      var carbrand = brand.value;
      var carmodel = model.value;
      var carcolor = color.value;
      var caryear = year.value;
      var carprice = price.value;

      if (carbrand) {
        // Edit value
        self.cars[item].carBrand = carbrand;
        self.cars[item].model = carmodel;
        self.cars[item].color = carcolor;
        self.cars[item].age = caryear;
        self.cars[item].price = carprice;
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    };
  };

  this.Delete = function (item) {
    // Delete the current row
    this.cars.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
})();

app.FetchAll();

function CloseInput() {
  document.getElementById("spoiler").style.display = "none";
}
