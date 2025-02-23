var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking-space",
      "name": "Parking Space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.39691448451281985,
          "pitch": 0.05314053206406122,
          "rotation": 0,
          "target": "1-counter"
        },
        {
          "yaw": -0.047983465735899955,
          "pitch": 0.05168018148660103,
          "rotation": 0,
          "target": "2-reception"
        },
        {
          "yaw": 0.23035920984461633,
          "pitch": 0.04678383971839217,
          "rotation": 0,
          "target": "3-open-kitchen"
        },
        {
          "yaw": 0.5899951490547917,
          "pitch": 0.09483716627021721,
          "rotation": 0.7853981633974483,
          "target": "4-walk-way-seating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-counter",
      "name": "Counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.1913462019685923,
        "pitch": 0.12720752500080224,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.3069998253669617,
          "pitch": 0.1225348218104152,
          "rotation": 0,
          "target": "0-parking-space"
        },
        {
          "yaw": 2.8216630195454435,
          "pitch": 0.08260117494979369,
          "rotation": 0,
          "target": "4-walk-way-seating"
        },
        {
          "yaw": 2.275582023148992,
          "pitch": 0.13509465927548803,
          "rotation": 4.71238898038469,
          "target": "2-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.9743866288367347,
        "pitch": 0.030896153686573058,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.40879330563779,
          "pitch": 0.15413242613007228,
          "rotation": 0,
          "target": "3-open-kitchen"
        },
        {
          "yaw": 1.6403705187798066,
          "pitch": 0.06781619548319284,
          "rotation": 7.853981633974483,
          "target": "1-counter"
        },
        {
          "yaw": 0.23354285981523581,
          "pitch": 0.12350930633852997,
          "rotation": 0,
          "target": "0-parking-space"
        },
        {
          "yaw": -0.8397390560993543,
          "pitch": 0.1898659748722249,
          "rotation": 0,
          "target": "4-walk-way-seating"
        },
        {
          "yaw": -1.130247534830282,
          "pitch": 0.0685737188320239,
          "rotation": 0,
          "target": "5-built-in-seating"
        },
        {
          "yaw": -1.6566177268033133,
          "pitch": 0.017482329552077402,
          "rotation": 4.71238898038469,
          "target": "6-outdoor-seating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-open-kitchen",
      "name": "Open Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.15439451075333643,
        "pitch": 0.06984321904986501,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.9760608938841102,
          "pitch": 0.12106089676128029,
          "rotation": 0,
          "target": "9-wash"
        },
        {
          "yaw": 2.2641183073248854,
          "pitch": 0.1121575116194613,
          "rotation": 0,
          "target": "5-built-in-seating"
        },
        {
          "yaw": 2.5723940760727553,
          "pitch": 0.2979104271689792,
          "rotation": 0,
          "target": "4-walk-way-seating"
        },
        {
          "yaw": -1.6009326717426475,
          "pitch": 0.237178542671856,
          "rotation": 0,
          "target": "2-reception"
        },
        {
          "yaw": -2.628055693577636,
          "pitch": 0.17667946173693316,
          "rotation": 0,
          "target": "0-parking-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-walk-way-seating",
      "name": "Walk-way Seating",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04430451178139627,
        "pitch": -0.04778746566569225,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.06821316850965431,
          "pitch": 0.02300543292903967,
          "rotation": 0,
          "target": "6-outdoor-seating"
        },
        {
          "yaw": 0.4632912101396087,
          "pitch": 0.05526848435094678,
          "rotation": 0,
          "target": "5-built-in-seating"
        },
        {
          "yaw": -1.87806595129706,
          "pitch": 0.06519877755195758,
          "rotation": 0,
          "target": "2-reception"
        },
        {
          "yaw": -1.3864749473588596,
          "pitch": 0.05451924091839011,
          "rotation": 0,
          "target": "3-open-kitchen"
        },
        {
          "yaw": -2.2130575451321963,
          "pitch": 0.07608481420966129,
          "rotation": 0,
          "target": "1-counter"
        },
        {
          "yaw": -2.903007979378197,
          "pitch": 0.17558211676600344,
          "rotation": 0,
          "target": "0-parking-space"
        },
        {
          "yaw": -0.7294989872839661,
          "pitch": 0.00905593075306399,
          "rotation": 0,
          "target": "9-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-built-in-seating",
      "name": "Built-in Seating",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.1453723216212701,
        "pitch": -0.0629507961173168,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.0788146605593631,
          "pitch": 0.14934414410612362,
          "rotation": 0,
          "target": "4-walk-way-seating"
        },
        {
          "yaw": 0.7381599083307258,
          "pitch": 0.07649978508875499,
          "rotation": 0,
          "target": "6-outdoor-seating"
        },
        {
          "yaw": -0.6079234917211149,
          "pitch": 0.029873621419842067,
          "rotation": 0,
          "target": "3-open-kitchen"
        },
        {
          "yaw": -0.037976219690099455,
          "pitch": 0.053720436673341254,
          "rotation": 0,
          "target": "9-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-outdoor-seating",
      "name": "Outdoor Seating",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0389481107559266,
        "pitch": -0.03867677857335039,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.3837405946993915,
          "pitch": 0.0220415858765719,
          "rotation": 0,
          "target": "7-outdoor-seating"
        },
        {
          "yaw": 0.5340333997815794,
          "pitch": 0.04494450538984296,
          "rotation": 0,
          "target": "8-wash-"
        },
        {
          "yaw": -1.2582411041418542,
          "pitch": 0.16471494366811612,
          "rotation": 0,
          "target": "5-built-in-seating"
        },
        {
          "yaw": -0.3584851040361876,
          "pitch": 0.0969951680062131,
          "rotation": 0,
          "target": "4-walk-way-seating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-outdoor-seating",
      "name": "Outdoor seating",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.33966792365736787,
        "pitch": -0.027569691730208845,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.1648826293210615,
          "pitch": 0.10650199454915388,
          "rotation": 0,
          "target": "9-wash"
        },
        {
          "yaw": -0.6221523744872073,
          "pitch": 0.09180255095026268,
          "rotation": 0.7853981633974483,
          "target": "6-outdoor-seating"
        },
        {
          "yaw": 0.26238082356614,
          "pitch": 0.04360222297835925,
          "rotation": 0.7853981633974483,
          "target": "4-walk-way-seating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wash-",
      "name": "Wash ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.05496097075678463,
        "pitch": 0.10026100734732424,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.041768044878505606,
          "pitch": 0.18986496801479547,
          "rotation": 0,
          "target": "9-wash"
        },
        {
          "yaw": 1.6083022054578189,
          "pitch": 0.11826676538149528,
          "rotation": 0,
          "target": "7-outdoor-seating"
        },
        {
          "yaw": 2.885265640762566,
          "pitch": 0.10585870439603973,
          "rotation": 0,
          "target": "6-outdoor-seating"
        },
        {
          "yaw": -2.0807045452406587,
          "pitch": 0.24978550629718121,
          "rotation": 0.7853981633974483,
          "target": "4-walk-way-seating"
        },
        {
          "yaw": -3.022880418414763,
          "pitch": 0.12455055098937251,
          "rotation": 0,
          "target": "5-built-in-seating"
        },
        {
          "yaw": -0.8205243624792153,
          "pitch": 0.12359150816328679,
          "rotation": 0,
          "target": "3-open-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wash",
      "name": "Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.7724914715076725,
        "pitch": -0.03608477302068991,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.5087755303760453,
          "pitch": 0.06308239391511705,
          "rotation": 0,
          "target": "6-outdoor-seating"
        },
        {
          "yaw": -1.188319909578036,
          "pitch": 0.046456878319506956,
          "rotation": 0,
          "target": "7-outdoor-seating"
        },
        {
          "yaw": 1.2787850338523103,
          "pitch": 0.14178399201436775,
          "rotation": 0.7853981633974483,
          "target": "3-open-kitchen"
        },
        {
          "yaw": 0.6098223128154707,
          "pitch": 0.10503397287989102,
          "rotation": 0,
          "target": "4-walk-way-seating"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Open Restaurant",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
