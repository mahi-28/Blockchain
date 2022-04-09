var contract;
$(document).ready(function () {
  web3 = new Web3(web3.currentProvider);
  var address = "0x20b5c6ca219345511a56d15ff25cf33edb3cd0a3";
  var abi = [
    {
      constant: false,
      inputs: [
        {
          name: "amt",
          type: "int256",
        },
      ],
      name: "deposit",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "amt",
          type: "int256",
        },
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      constant: true,
      inputs: [],
      name: "getBal",
      outputs: [
        {
          name: "",
          type: "int256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];
  contract = new web3.eth.Contract(abi, address);
  contract.methods
    .getBal()
    .call()
    .then(function (bal) {
      $("#balance").html(bal);
    });
});

$("#deposit").click(function () {
  var amount = 0;
  amount = parseInt($("#amount").val());
  web3.eth
    .getAccounts()
    .then(function (accounts) {
      var acc = accounts[0];
      return contract.methods.deposit(amt).send({ from: acc });
    })
    .then(function (tx) {
      console.log(tx);
    })
    .catch(function (tx) {
      console.log(tx);
    });
});

$("#withdraw").click(function () {
  var amount = 0;
  amount = parseInt($("#amount").val());
  web3.eth
    .getAccounts()
    .then(function (accounts) {
      var acc = accounts[0];
      return contract.methods.withdraw(amt).send({ from: acc });
    })
    .then(function (tx) {
      console.log(tx);
    })
    .catch(function (tx) {
      console.log(tx);
    });
});
