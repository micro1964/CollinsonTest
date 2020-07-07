$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("task1.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Reginald Williams"
    },
    {
      "line": 3,
      "value": "#Summary : Vending Machine Tests"
    }
  ],
  "line": 6,
  "name": "Vending Machine Tests",
  "description": "As a vending machine user, I want to purchase different drinks",
  "id": "vending-machine-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Purchase the various type of drinks",
  "description": "",
  "id": "vending-machine-tests;purchase-the-various-type-of-drinks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@VM1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "That the vending machine is stocked with the drinks",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I put enough money in the vending machine",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I the select \u003cbrand\u003e for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The transaction completes successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "vending-machine-tests;purchase-the-various-type-of-drinks;",
  "rows": [
    {
      "cells": [
        "brand"
      ],
      "line": 17,
      "id": "vending-machine-tests;purchase-the-various-type-of-drinks;;1"
    },
    {
      "cells": [
        "coke"
      ],
      "line": 18,
      "id": "vending-machine-tests;purchase-the-various-type-of-drinks;;2"
    },
    {
      "cells": [
        "pepsi"
      ],
      "line": 19,
      "id": "vending-machine-tests;purchase-the-various-type-of-drinks;;3"
    },
    {
      "cells": [
        "soda"
      ],
      "line": 20,
      "id": "vending-machine-tests;purchase-the-various-type-of-drinks;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Purchase the various type of drinks",
  "description": "",
  "id": "vending-machine-tests;purchase-the-various-type-of-drinks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@VM1"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "That the vending machine is stocked with the drinks",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I put enough money in the vending machine",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I the select coke for purchase",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The transaction completes successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.that_the_vending_machine_is_stocked_with_the_drinks()"
});
formatter.result({
  "duration": 273030000,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_put_enough_money_in_the_vending_machine()"
});
formatter.result({
  "duration": 11471800,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_the_select_coke_for_purchase()"
});
formatter.result({
  "duration": 19677800,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.the_transaction_completes_successfully()"
});
formatter.result({
  "duration": 63700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Purchase the various type of drinks",
  "description": "",
  "id": "vending-machine-tests;purchase-the-various-type-of-drinks;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@VM1"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "That the vending machine is stocked with the drinks",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I put enough money in the vending machine",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I the select pepsi for purchase",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The transaction completes successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.that_the_vending_machine_is_stocked_with_the_drinks()"
});
formatter.result({
  "duration": 755300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_put_enough_money_in_the_vending_machine()"
});
formatter.result({
  "duration": 85300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_the_select_pepsi_for_purchase()"
});
formatter.result({
  "duration": 5642700,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.the_transaction_completes_successfully()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Purchase the various type of drinks",
  "description": "",
  "id": "vending-machine-tests;purchase-the-various-type-of-drinks;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@VM1"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "That the vending machine is stocked with the drinks",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I put enough money in the vending machine",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I the select soda for purchase",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The transaction completes successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.that_the_vending_machine_is_stocked_with_the_drinks()"
});
formatter.result({
  "duration": 937800,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_put_enough_money_in_the_vending_machine()"
});
formatter.result({
  "duration": 57900,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_the_select_soda_for_purchase()"
});
formatter.result({
  "duration": 4130400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.the_transaction_completes_successfully()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Vending Machine Accepts Correct Denominations",
  "description": "",
  "id": "vending-machine-tests;vending-machine-accepts-correct-denominations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@VM2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I put into the vending machine \u003cmoney\u003e pennies",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "There are cans of \u003cproduct\u003e in the vending machine",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I request for a can of \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The transaction is successful \u003cmoney\u003e for \u003cproduct\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "vending-machine-tests;vending-machine-accepts-correct-denominations;",
  "rows": [
    {
      "cells": [
        "money",
        "product"
      ],
      "line": 30,
      "id": "vending-machine-tests;vending-machine-accepts-correct-denominations;;1"
    },
    {
      "cells": [
        "25",
        "coke"
      ],
      "line": 31,
      "id": "vending-machine-tests;vending-machine-accepts-correct-denominations;;2"
    },
    {
      "cells": [
        "35",
        "pepsi"
      ],
      "line": 32,
      "id": "vending-machine-tests;vending-machine-accepts-correct-denominations;;3"
    },
    {
      "cells": [
        "45",
        "soda"
      ],
      "line": 33,
      "id": "vending-machine-tests;vending-machine-accepts-correct-denominations;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Vending Machine Accepts Correct Denominations",
  "description": "",
  "id": "vending-machine-tests;vending-machine-accepts-correct-denominations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@VM2"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I put into the vending machine 25 pennies",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "There are cans of coke in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I request for a can of coke",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The transaction is successful 25 for coke",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine_pennies(int)"
});
formatter.result({
  "duration": 7294100,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_coke_in_the_vending_machine()"
});
formatter.result({
  "duration": 1115800,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_coke()"
});
formatter.result({
  "duration": 3247200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_coke(int)"
});
formatter.result({
  "duration": 3858600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Vending Machine Accepts Correct Denominations",
  "description": "",
  "id": "vending-machine-tests;vending-machine-accepts-correct-denominations;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@VM2"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I put into the vending machine 35 pennies",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "There are cans of pepsi in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I request for a can of pepsi",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The transaction is successful 35 for pepsi",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine_pennies(int)"
});
formatter.result({
  "duration": 145200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_pepsi_in_the_vending_machine()"
});
formatter.result({
  "duration": 688400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_pepsi()"
});
formatter.result({
  "duration": 2701800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_pepsi(int)"
});
formatter.result({
  "duration": 593500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Vending Machine Accepts Correct Denominations",
  "description": "",
  "id": "vending-machine-tests;vending-machine-accepts-correct-denominations;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@VM2"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I put into the vending machine 45 pennies",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "There are cans of soda in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I request for a can of soda",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The transaction is successful 45 for soda",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine_pennies(int)"
});
formatter.result({
  "duration": 108700,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_soda_in_the_vending_machine()"
});
formatter.result({
  "duration": 1187900,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_soda()"
});
formatter.result({
  "duration": 5889700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_soda(int)"
});
formatter.result({
  "duration": 141600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine \u003cmoney\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of \u003cproduct\u003e in the vending machine",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back \u003cchange\u003e for \u003cproduct\u003e amount paid \u003cmoney\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful \u003cmoney\u003e for \u003cproduct\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;",
  "rows": [
    {
      "cells": [
        "money",
        "product",
        "change"
      ],
      "line": 44,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;1"
    },
    {
      "cells": [
        "75",
        "coke",
        "50"
      ],
      "line": 45,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;2"
    },
    {
      "cells": [
        "75",
        "pepsi",
        "40"
      ],
      "line": 46,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;3"
    },
    {
      "cells": [
        "75",
        "soda",
        "30"
      ],
      "line": 47,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;4"
    },
    {
      "cells": [
        "50",
        "coke",
        "25"
      ],
      "line": 48,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;5"
    },
    {
      "cells": [
        "50",
        "pepsi",
        "15"
      ],
      "line": 49,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;6"
    },
    {
      "cells": [
        "50",
        "soda",
        "5"
      ],
      "line": 50,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;7"
    },
    {
      "cells": [
        "150",
        "coke",
        "125"
      ],
      "line": 51,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;8"
    },
    {
      "cells": [
        "150",
        "pepsi",
        "115"
      ],
      "line": 52,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;9"
    },
    {
      "cells": [
        "150",
        "soda",
        "105"
      ],
      "line": 53,
      "id": "vending-machine-tests;vending-machine-gives-correct-change;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 75",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of coke in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of coke",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 50 for coke amount paid 75",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 75 for coke",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 203100,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_coke_in_the_vending_machine()"
});
formatter.result({
  "duration": 853400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_coke()"
});
formatter.result({
  "duration": 4457600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "75",
      "offset": 55
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_coke_amount_paid(int,int)"
});
formatter.result({
  "duration": 605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_coke(int)"
});
formatter.result({
  "duration": 175100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 75",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of pepsi in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of pepsi",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 40 for pepsi amount paid 75",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 75 for pepsi",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 457200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_pepsi_in_the_vending_machine()"
});
formatter.result({
  "duration": 720600,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_pepsi()"
});
formatter.result({
  "duration": 7737800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 31
    },
    {
      "val": "75",
      "offset": 56
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_pepsi_amount_paid(int,int)"
});
formatter.result({
  "duration": 330600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_pepsi(int)"
});
formatter.result({
  "duration": 153000,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 75",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of soda in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of soda",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 30 for soda amount paid 75",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 75 for soda",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 250200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_soda_in_the_vending_machine()"
});
formatter.result({
  "duration": 1740900,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_soda()"
});
formatter.result({
  "duration": 8697000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 31
    },
    {
      "val": "75",
      "offset": 55
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_soda_amount_paid(int,int)"
});
formatter.result({
  "duration": 372700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_soda(int)"
});
formatter.result({
  "duration": 535300,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 50",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of coke in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of coke",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 25 for coke amount paid 50",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 50 for coke",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 277400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_coke_in_the_vending_machine()"
});
formatter.result({
  "duration": 754800,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_coke()"
});
formatter.result({
  "duration": 2842700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 31
    },
    {
      "val": "50",
      "offset": 55
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_coke_amount_paid(int,int)"
});
formatter.result({
  "duration": 459500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_coke(int)"
});
formatter.result({
  "duration": 144500,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 50",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of pepsi in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of pepsi",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 15 for pepsi amount paid 50",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 50 for pepsi",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 323200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_pepsi_in_the_vending_machine()"
});
formatter.result({
  "duration": 1521000,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_pepsi()"
});
formatter.result({
  "duration": 4618400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 31
    },
    {
      "val": "50",
      "offset": 56
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_pepsi_amount_paid(int,int)"
});
formatter.result({
  "duration": 346000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_pepsi(int)"
});
formatter.result({
  "duration": 126900,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 50",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of soda in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of soda",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 5 for soda amount paid 50",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 50 for soda",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 5976400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_soda_in_the_vending_machine()"
});
formatter.result({
  "duration": 2332300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_soda()"
});
formatter.result({
  "duration": 9122200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "50",
      "offset": 54
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_soda_amount_paid(int,int)"
});
formatter.result({
  "duration": 1379000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_soda(int)"
});
formatter.result({
  "duration": 188000,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 150",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of coke in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of coke",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 125 for coke amount paid 150",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 150 for coke",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 139000,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_coke_in_the_vending_machine()"
});
formatter.result({
  "duration": 846400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_coke()"
});
formatter.result({
  "duration": 4148500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "125",
      "offset": 31
    },
    {
      "val": "150",
      "offset": 56
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_coke_amount_paid(int,int)"
});
formatter.result({
  "duration": 967200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_coke(int)"
});
formatter.result({
  "duration": 288000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 150",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of pepsi in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of pepsi",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 115 for pepsi amount paid 150",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 150 for pepsi",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 316400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_pepsi_in_the_vending_machine()"
});
formatter.result({
  "duration": 627000,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_pepsi()"
});
formatter.result({
  "duration": 4678800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115",
      "offset": 31
    },
    {
      "val": "150",
      "offset": 57
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_pepsi_amount_paid(int,int)"
});
formatter.result({
  "duration": 817900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_pepsi(int)"
});
formatter.result({
  "duration": 918500,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Vending Machine Gives Correct Change",
  "description": "",
  "id": "vending-machine-tests;vending-machine-gives-correct-change;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@VM3"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I put into the vending machine 150",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "There are cans of soda in the vending machine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I request for a can of soda",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The vending machine gives back 105 for soda amount paid 150",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "The transaction is successful 150 for soda",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 927000,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_soda_in_the_vending_machine()"
});
formatter.result({
  "duration": 1343700,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_request_for_a_can_of_soda()"
});
formatter.result({
  "duration": 14341400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "105",
      "offset": 31
    },
    {
      "val": "150",
      "offset": 56
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back_for_soda_amount_paid(int,int)"
});
formatter.result({
  "duration": 211500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 30
    }
  ],
  "location": "Task1Steps.the_transaction_is_successful_for_soda(int)"
});
formatter.result({
  "duration": 707800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Vending Machine Stocks Can Be Updated Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@VM4"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "No balance of \u003cproduct\u003e in the vending machine",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I put following \u003cnumber\u003e of \u003cproduct\u003e into the vending machine",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I get the inventory of \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "The Number of \u003cproduct\u003e in vending machine matches \u003ctotal\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly;",
  "rows": [
    {
      "cells": [
        "product",
        "number",
        "total"
      ],
      "line": 63,
      "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly;;1"
    },
    {
      "cells": [
        "coke",
        "5",
        "5"
      ],
      "line": 64,
      "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly;;2"
    },
    {
      "cells": [
        "pepsi",
        "5",
        "5"
      ],
      "line": 65,
      "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly;;3"
    },
    {
      "cells": [
        "soda",
        "5",
        "5"
      ],
      "line": 66,
      "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 64,
  "name": "Vending Machine Stocks Can Be Updated Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@VM4"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "No balance of coke in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I put following 5 of coke into the vending machine",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I get the inventory of coke",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "The Number of coke in vending machine matches 5",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.no_balance_of_coke_in_the_vending_machine()"
});
formatter.result({
  "duration": 4120400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "Task1Steps.i_put_following_of_coke_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 737700,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_get_the_inventory_of_coke()"
});
formatter.result({
  "duration": 2156900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 46
    }
  ],
  "location": "Task1Steps.the_Number_of_coke_in_vending_machine_matches(int)"
});
formatter.result({
  "duration": 95900,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Vending Machine Stocks Can Be Updated Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@VM4"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "No balance of pepsi in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I put following 5 of pepsi into the vending machine",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I get the inventory of pepsi",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "The Number of pepsi in vending machine matches 5",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.no_balance_of_pepsi_in_the_vending_machine()"
});
formatter.result({
  "duration": 907300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "Task1Steps.i_put_following_of_pepsi_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 813800,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_get_the_inventory_of_pepsi()"
});
formatter.result({
  "duration": 1852900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 47
    }
  ],
  "location": "Task1Steps.the_Number_of_pepsi_in_vending_machine_matches(int)"
});
formatter.result({
  "duration": 94600,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Vending Machine Stocks Can Be Updated Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-can-be-updated-correctly;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@VM4"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "No balance of soda in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I put following 5 of soda into the vending machine",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I get the inventory of soda",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "The Number of soda in vending machine matches 5",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.no_balance_of_soda_in_the_vending_machine()"
});
formatter.result({
  "duration": 720800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "Task1Steps.i_put_following_of_soda_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 2386200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_get_the_inventory_of_soda()"
});
formatter.result({
  "duration": 14540700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 46
    }
  ],
  "location": "Task1Steps.the_Number_of_soda_in_vending_machine_matches(int)"
});
formatter.result({
  "duration": 97900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "Vending Machine Stocks Reduced Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@VM5"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "There are cans of \u003cproduct\u003e in the vending machine",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I purchase a can of \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I get the inventory of \u003cproduct\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the number of \u003cproduct\u003e has reduced by one",
  "keyword": "Then "
});
formatter.examples({
  "line": 75,
  "name": "",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 76,
      "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly;;1"
    },
    {
      "cells": [
        "coke"
      ],
      "line": 77,
      "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly;;2"
    },
    {
      "cells": [
        "pepsi"
      ],
      "line": 78,
      "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly;;3"
    },
    {
      "cells": [
        "soda"
      ],
      "line": 79,
      "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 77,
  "name": "Vending Machine Stocks Reduced Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@VM5"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "There are cans of coke in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I purchase a can of coke",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I get the inventory of coke",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the number of coke has reduced by one",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_coke_in_the_vending_machine()"
});
formatter.result({
  "duration": 5071400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_purchase_a_can_of_coke()"
});
formatter.result({
  "duration": 9336700,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_get_the_inventory_of_coke()"
});
formatter.result({
  "duration": 4445400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.the_number_of_coke_has_reduced_by_one()"
});
formatter.result({
  "duration": 2743000,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Vending Machine Stocks Reduced Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@VM5"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "There are cans of pepsi in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I purchase a can of pepsi",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I get the inventory of pepsi",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the number of pepsi has reduced by one",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_pepsi_in_the_vending_machine()"
});
formatter.result({
  "duration": 6670200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_purchase_a_can_of_pepsi()"
});
formatter.result({
  "duration": 5323200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_get_the_inventory_of_pepsi()"
});
formatter.result({
  "duration": 2194800,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.the_number_of_pepsi_has_reduced_by_one()"
});
formatter.result({
  "duration": 615300,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Vending Machine Stocks Reduced Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-stocks-reduced-correctly;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@VM5"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "There are cans of soda in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "I purchase a can of soda",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I get the inventory of soda",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the number of soda has reduced by one",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_soda_in_the_vending_machine()"
});
formatter.result({
  "duration": 699300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_purchase_a_can_of_soda()"
});
formatter.result({
  "duration": 2791200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_get_the_inventory_of_soda()"
});
formatter.result({
  "duration": 25587300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.the_number_of_soda_has_reduced_by_one()"
});
formatter.result({
  "duration": 586300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 82,
  "name": "Vending Machine Handles Funds Too Low Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 81,
      "name": "@VM6"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "There are cans of \u003cproduct\u003e in the vending machine",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "I put into the vending machine \u003cmoney\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I try to purchase a can of \u003cproduct\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Vending machine returns \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "No of \u003cproduct\u003e in vending Machine remains the same",
  "keyword": "And "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly;",
  "rows": [
    {
      "cells": [
        "product",
        "money",
        "message"
      ],
      "line": 89,
      "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly;;1"
    },
    {
      "cells": [
        "coke",
        "24",
        "you have not inserted enough money"
      ],
      "line": 90,
      "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly;;2"
    },
    {
      "cells": [
        "pepsi",
        "24",
        "you have not inserted enough money"
      ],
      "line": 91,
      "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly;;3"
    },
    {
      "cells": [
        "soda",
        "24",
        "you have not inserted enough money"
      ],
      "line": 92,
      "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 90,
  "name": "Vending Machine Handles Funds Too Low Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 81,
      "name": "@VM6"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "There are cans of coke in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "I put into the vending machine 24",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I try to purchase a can of coke",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Vending machine returns you have not inserted enough money",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "No of coke in vending Machine remains the same",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_coke_in_the_vending_machine()"
});
formatter.result({
  "duration": 672600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 490400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_try_to_purchase_a_can_of_coke()"
});
formatter.result({
  "duration": 6751600,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.vending_machine_returns_you_have_not_inserted_enough_money()"
});
formatter.result({
  "duration": 284300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.no_of_coke_in_vending_Machine_remains_the_same()"
});
formatter.result({
  "duration": 2077600,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Vending Machine Handles Funds Too Low Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 81,
      "name": "@VM6"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "There are cans of pepsi in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "I put into the vending machine 24",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I try to purchase a can of pepsi",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Vending machine returns you have not inserted enough money",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "No of pepsi in vending Machine remains the same",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_pepsi_in_the_vending_machine()"
});
formatter.result({
  "duration": 1437400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 549700,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_try_to_purchase_a_can_of_pepsi()"
});
formatter.result({
  "duration": 30835200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.vending_machine_returns_you_have_not_inserted_enough_money()"
});
formatter.result({
  "duration": 146400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.no_of_pepsi_in_vending_Machine_remains_the_same()"
});
formatter.result({
  "duration": 145482800,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Vending Machine Handles Funds Too Low Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-handles-funds-too-low-correctly;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 81,
      "name": "@VM6"
    },
    {
      "line": 5,
      "name": "@VM"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "There are cans of soda in the vending machine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "I put into the vending machine 24",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I try to purchase a can of soda",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Vending machine returns you have not inserted enough money",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "No of soda in vending Machine remains the same",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Task1Steps.there_are_cans_of_soda_in_the_vending_machine()"
});
formatter.result({
  "duration": 724800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 428400,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_try_to_purchase_a_can_of_soda()"
});
formatter.result({
  "duration": 63184300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.vending_machine_returns_you_have_not_inserted_enough_money()"
});
formatter.result({
  "duration": 257800,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.no_of_soda_in_vending_Machine_remains_the_same()"
});
formatter.result({
  "duration": 9034200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 95,
  "name": "Vending Machine Handles Out Of Stock Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-handles-out-of-stock-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@VM7"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "There are zero cans in the vending machine",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "I put into the vending machine \u003cmoney\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I try to purchase any item",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Vending machine returns \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "The vending machine gives back \u003cmoney\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 101,
  "name": "",
  "description": "",
  "id": "vending-machine-tests;vending-machine-handles-out-of-stock-correctly;",
  "rows": [
    {
      "cells": [
        "product",
        "money",
        "message"
      ],
      "line": 102,
      "id": "vending-machine-tests;vending-machine-handles-out-of-stock-correctly;;1"
    },
    {
      "cells": [
        "coke",
        "100",
        "is out of stock"
      ],
      "line": 103,
      "id": "vending-machine-tests;vending-machine-handles-out-of-stock-correctly;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 103,
  "name": "Vending Machine Handles Out Of Stock Correctly",
  "description": "",
  "id": "vending-machine-tests;vending-machine-handles-out-of-stock-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@VM"
    },
    {
      "line": 94,
      "name": "@VM7"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "There are zero cans in the vending machine",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "I put into the vending machine 100",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I try to purchase any item",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Vending machine returns is out of stock",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "The vending machine gives back 100",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Task1Steps.there_are_zero_cans_in_the_vending_machine()"
});
formatter.result({
  "duration": 920400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 31
    }
  ],
  "location": "Task1Steps.i_put_into_the_vending_machine(int)"
});
formatter.result({
  "duration": 138300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.i_try_to_purchase_any_item()"
});
formatter.result({
  "duration": 25114200,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.vending_machine_returns_is_out_of_stock()"
});
formatter.result({
  "duration": 336400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 31
    }
  ],
  "location": "Task1Steps.the_vending_machine_gives_back(int)"
});
formatter.result({
  "duration": 109400,
  "status": "passed"
});
formatter.uri("task2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Reginald Williams"
    },
    {
      "line": 3,
      "value": "#Summary: City Bikes Api Testing"
    }
  ],
  "line": 6,
  "name": "City Bikes API Tests",
  "description": "As a biker I would like to know the exact location of city bikes around the world in a given application.",
  "id": "city-bikes-api-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@CB_API"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "The City Bikes Api Returns 200 Response Code",
  "description": "",
  "id": "city-bikes-api-tests;the-city-bikes-api-returns-200-response-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@CB_API01"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "City Bikes Api Url is active",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I run the unfiltered api",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The expected success response code is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "Task2Steps.city_Bikes_Api_Url_is_active()"
});
formatter.result({
  "duration": 20962900,
  "status": "passed"
});
formatter.match({
  "location": "Task2Steps.i_run_the_unfiltered_api()"
});
formatter.result({
  "duration": 2243800100,
  "status": "passed"
});
formatter.match({
  "location": "Task2Steps.the_expected_success_response_code_is_returned()"
});
formatter.result({
  "duration": 148500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "The City Bikes Api Filtered By Location Returns Expected City, Longitude \u0026 Latitude",
  "description": "",
  "id": "city-bikes-api-tests;the-city-bikes-api-filtered-by-location-returns-expected-city,-longitude-\u0026-latitude",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@CB_API02"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I have a specific location \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I run the api filtered by location",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I extract the country returned by the api",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that the country \u003cvalue\u003e is as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the the latitude londitude values are returned",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "city-bikes-api-tests;the-city-bikes-api-filtered-by-location-returns-expected-city,-longitude-\u0026-latitude;",
  "rows": [
    {
      "cells": [
        "name",
        "value"
      ],
      "line": 24,
      "id": "city-bikes-api-tests;the-city-bikes-api-filtered-by-location-returns-expected-city,-longitude-\u0026-latitude;;1"
    },
    {
      "cells": [
        "visa-frankfurt",
        "frankfurt"
      ],
      "line": 25,
      "id": "city-bikes-api-tests;the-city-bikes-api-filtered-by-location-returns-expected-city,-longitude-\u0026-latitude;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "The City Bikes Api Filtered By Location Returns Expected City, Longitude \u0026 Latitude",
  "description": "",
  "id": "city-bikes-api-tests;the-city-bikes-api-filtered-by-location-returns-expected-city,-longitude-\u0026-latitude;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@CB_API02"
    },
    {
      "line": 5,
      "name": "@CB_API"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I have a specific location visa-frankfurt",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I run the api filtered by location",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I extract the country returned by the api",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify that the country frankfurt is as expected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the the latitude londitude values are returned",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "visa-frankfurt",
      "offset": 27
    }
  ],
  "location": "Task2Steps.i_have_a_specific_location(String)"
});
formatter.result({
  "duration": 1660200,
  "status": "passed"
});
formatter.match({
  "location": "Task2Steps.i_run_the_api_filtered_by_location()"
});
formatter.result({
  "duration": 552973100,
  "status": "passed"
});
formatter.match({
  "location": "Task2Steps.i_extract_the_country_returned_by_the_api()"
});
formatter.result({
  "duration": 75900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "frankfurt",
      "offset": 26
    }
  ],
  "location": "Task2Steps.i_verify_that_the_country_is_as_expected(String)"
});
formatter.result({
  "duration": 111100,
  "status": "passed"
});
formatter.match({
  "location": "Task2Steps.i_verify_the_the_latitude_londitude_values_are_returned()"
});
formatter.result({
  "duration": 74500,
  "status": "passed"
});
});