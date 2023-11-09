    // Extension Office Form Submission
    document.getElementById('extensionForm').addEventListener('submit', function (event) {
      event.preventDefault();
      var officeName = document.getElementById('officeName').value;
      var officeLocation = document.getElementById('officeLocation').value;
      addExtensionOffice(officeName, officeLocation);
      document.getElementById('extensionForm').reset();
    });

    // Farmer Form Submission
    document.getElementById('farmerForm').addEventListener('submit', function (event) {
      event.preventDefault();
      var farmerName = document.getElementById('farmerName').value;
      var farmerLocation = document.getElementById('farmerLocation').value;
      addFarmer(farmerName, farmerLocation);
      document.getElementById('farmerForm').reset();
    });

    // Farm Form Submission
    document.getElementById('farmForm').addEventListener('submit', function (event) {
      event.preventDefault();
      var farmName = document.getElementById('farmName').value;
      var farmLocation = document.getElementById('farmLocation').value;
      addFarm(farmName, farmLocation);
      document.getElementById('farmForm').reset();
    });

    // Function to Add Extension Office to Tableg
    function addExtensionOffice(officeName, officeLocation) {
      var table = document.getElementById('extensionTable');
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = officeName;
      cell2.innerHTML = officeLocation;
    }

    // Function to Add Farmer to Table
    function addFarmer(farmerName, farmerLocation) {
      var table = document.getElementById('farmerTable');
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = farmerName;
      cell2.innerHTML = farmerLocation;
    }

    // Function to Add Farm to Table
    function addFarm(farmName, farmLocation) {
      var table = document.getElementById('farmTable');
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = farmName;
      cell2.innerHTML = farmLocation;
    }