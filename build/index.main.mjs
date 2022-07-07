// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Contractor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contractor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contractor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v134 = stdlib.protect(ctc2, interact.deadline, 'for Contractor\'s interact field deadline');
  const v135 = stdlib.protect(ctc2, interact.price, 'for Contractor\'s interact field price');
  const v136 = stdlib.protect(ctc3, interact.swapperAddress, 'for Contractor\'s interact field swapperAddress');
  
  const v139 = stdlib.ge(v135, stdlib.checkedBigNumberify('./index.rsh:24:24:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v139, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:24:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:21:11:application call to [unknown function] (defined at: ./index.rsh:21:15:function exp)'],
    msg: 'Price must be greater than 1 Algo',
    who: 'Contractor'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v135, v136, v134],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc3, ctc2],
    pay: [v135, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v49, from: v141 } = txn1;
      
      sim_r.txns.push({
        amt: v142,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v143, null);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v49, from: v141 } = txn1;
  ;
  await stdlib.mapSet(map0, v143, null);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v159], secs: v161, time: v160, didSend: v85, from: v158 } = txn2;
  const v163 = stdlib.add(v142, v159);
  ;
  const v167 = stdlib.sub(v163, v142);
  ;
  const v171 = stdlib.sub(v167, v159);
  ;
  stdlib.protect(ctc0, await interact.notify(v159, v142), {
    at: './index.rsh:46:22:application',
    fs: ['at ./index.rsh:46:22:application call to [unknown function] (defined at: ./index.rsh:46:22:function exp)', 'at ./index.rsh:46:22:application call to "liftedInteract" (defined at: ./index.rsh:46:22:application)'],
    msg: 'notify',
    who: 'Contractor'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v141, v171],
    evt_cnt: 0,
    funcNum: 2,
    lct: v160,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v184, time: v183, didSend: v118, from: v182 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v141,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v184, time: v183, didSend: v118, from: v182 } = txn3;
  ;
  const v185 = stdlib.addressEq(v141, v182);
  stdlib.assert(v185, {
    at: './index.rsh:50:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Contractor'
    });
  ;
  return;
  
  
  
  
  
  
  };
export async function Swapper(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Swapper expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Swapper expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v49, from: v141 } = txn1;
  ;
  await stdlib.mapSet(map0, v143, null);
  const v150 = ctc.selfAddress();
  const v152 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v150), null);
  let v153;
  switch (v152[0]) {
    case 'None': {
      const v154 = v152[1];
      v153 = false;
      
      break;
      }
    case 'Some': {
      const v155 = v152[1];
      v153 = true;
      
      break;
      }
    }
  stdlib.assert(v153, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:15:function exp)'],
    msg: 'You are not a The main address',
    who: 'Swapper'
    });
  const v157 = stdlib.mul(v142, stdlib.checkedBigNumberify('./index.rsh:37:35:decimal', stdlib.UInt_max, '2'));
  
  const txn2 = await (ctc.sendrecv({
    args: [v141, v142, v157],
    evt_cnt: 1,
    funcNum: 1,
    lct: v145,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [v157, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v159], secs: v161, time: v160, didSend: v85, from: v158 } = txn2;
      
      const v163 = stdlib.add(v142, v159);
      sim_r.txns.push({
        amt: v159,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v167 = stdlib.sub(v163, v142);
      sim_r.txns.push({
        kind: 'from',
        to: v158,
        tok: undefined /* Nothing */
        });
      const v171 = stdlib.sub(v167, v159);
      sim_r.txns.push({
        kind: 'from',
        to: v141,
        tok: undefined /* Nothing */
        });
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v159], secs: v161, time: v160, didSend: v85, from: v158 } = txn2;
  const v163 = stdlib.add(v142, v159);
  ;
  const v167 = stdlib.sub(v163, v142);
  ;
  const v171 = stdlib.sub(v167, v159);
  ;
  stdlib.protect(ctc0, await interact.notify(v142, v159), {
    at: './index.rsh:45:22:application',
    fs: ['at ./index.rsh:45:22:application call to [unknown function] (defined at: ./index.rsh:45:22:function exp)', 'at ./index.rsh:45:22:application call to "liftedInteract" (defined at: ./index.rsh:45:22:application)'],
    msg: 'notify',
    who: 'Swapper'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v184, time: v183, didSend: v118, from: v182 } = txn3;
  ;
  const v185 = stdlib.addressEq(v141, v182);
  stdlib.assert(v185, {
    at: './index.rsh:50:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Swapper'
    });
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECICYCAQAAIjUAMRhBAa4pZEkiWzUBgQhbNQIxGSMSQQAIMQAoKGZCAXw2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQADASSQMQAA/JBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABEGxQE2wNP8xABJEsSKyATQDJVuyCCOyEDT/sgezQgDcSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yVbNf5JNQUXNf2ABNUVGRQ0/RZQsDT9iAETsSKyATT+sggjshAxALIHszT+NP0INP4JNP0JNfyxIrIBNP2yCCOyEDT/sgezNP80/BZQKEsBVwAoZ0gkNQEyBjUCQgB9SIGgjQaIAMYiNAESRDQESSISTDQCEhFESTUFSUkiWzX/VwggNf6BKFs1/YAEDSjcgTT/FlA0/lA0/RZQsDT/iACMNP4ogAEBZjEANP8WUChLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIzE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v143",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v143",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d4d38038062000d4d83398101604081905262000026916200024f565b600080554360035560408051338152825160208083019190915280840151805183850152908101516001600160a01b03166060830152820151608082015290517f57dd92bd95aea54c5537e918ca905e8ab41e33e8440512d93886574b31989f4f9181900360a00190a1602081015151620000a5903414600762000148565b602081810180518201516001600160a01b039081166000908152600484526040808220805460ff1916600190811790915584518601519093168252808220805462ff00001916905580518082018252808601838152338083529551518152928490554390935580518086019490945290518382015280518084038201815260609093019052815190926200013f9260029291019062000172565b50505062000339565b816200016e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018090620002fc565b90600052602060002090601f016020900481019282620001a45760008555620001ef565b82601f10620001bf57805160ff1916838001178555620001ef565b82800160010185558215620001ef579182015b82811115620001ef578251825591602001919060010190620001d2565b50620001fd92915062000201565b5090565b5b80821115620001fd576000815560010162000202565b604051606081016001600160401b03811182821017156200024957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026357600080fd5b604080519081016001600160401b03811182821017156200029457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ae57600080fd5b620002b862000218565b6020850151815260408501519092506001600160a01b0381168114620002dd57600080fd5b6020838101919091526060949094015160408301529283015250919050565b600181811c908216806200031157607f821691505b602082108114156200033357634e487b7160e01b600052602260045260246000fd5b50919050565b610a0480620003496000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633bc5b7bf146100835780637eea518c146100b057806383230757146100c3578063873779a1146100d8578063ab53f2c6146100eb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100a361009e366004610780565b61010e565b60405161007a91906107ba565b61005d6100be366004610819565b61013a565b3480156100cf57600080fd5b50600154610070565b61005d6100e6366004610819565b6102be565b3480156100f757600080fd5b506101006104fb565b60405161007a929190610835565b604080516060810182526000808252602082018190529181019190915261013482610598565b92915050565b61014a600260005414600d610670565b6101648135158061015d57506001548235145b600e610670565b60008080556002805461017690610892565b80601f01602080910402602001604051908101604052809291908181526020018280546101a290610892565b80156101ef5780601f106101c4576101008083540402835291602001916101ef565b820191906000526020600020905b8154815290600101906020018083116101d257829003601f168201915b50505050508060200190518101906102079190610930565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161023a92919061094c565b60405180910390a161024e3415600b610670565b8051610266906001600160a01b03163314600c610670565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102a3573d6000803e3d6000fd5b50600080805560018190556102ba90600290610695565b5050565b6102ce6001600054146009610670565b6102e8813515806102e157506001548235145b600a610670565b6000808055600280546102fa90610892565b80601f016020809104026020016040519081016040528092919081815260200182805461032690610892565b80156103735780601f1061034857610100808354040283529160200191610373565b820191906000526020600020905b81548152906001019060200180831161035657829003601f168201915b505050505080602001905181019061038b9190610930565b90506103a36040518060200160405280600081525090565b6040805133815284356020808301919091528501358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a16103f9346020850135146008610670565b6020820151604051339180156108fc02916000818181858888f19350505050158015610429573d6000803e3d6000fd5b50602082810151908401359061043f828261099f565b61044991906109b7565b61045391906109b7565b815281516040516001600160a01b0390911690602085013580156108fc02916000818181858888f19350505050158015610491573d6000803e3d6000fd5b506040805180820182526000808252602080830182815286516001600160a01b031680855286518252600293849055436001558551808401919091529051818601528451808203860181526060909101909452835192936104f4939101906106d2565b5050505050565b60006060600054600280805461051090610892565b80601f016020809104026020016040519081016040528092919081815260200182805461053c90610892565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156105e4576105e46107a4565b1415610661576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610625576106256107a4565b6001811115610636576106366107a4565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b816102ba5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546106a190610892565b6000825580601f106106b1575050565b601f0160209004906000526020600020908101906106cf9190610756565b50565b8280546106de90610892565b90600052602060002090601f0160209004810192826107005760008555610746565b82601f1061071957805160ff1916838001178555610746565b82800160010185558215610746579182015b8281111561074657825182559160200191906001019061072b565b50610752929150610756565b5090565b5b808211156107525760008155600101610757565b6001600160a01b03811681146106cf57600080fd5b60006020828403121561079257600080fd5b813561079d8161076b565b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106107df57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60006040828403121561081357600080fd5b50919050565b60006040828403121561082b57600080fd5b61079d8383610801565b82815260006020604081840152835180604085015260005b818110156108695785810183015185820160600152820161084d565b8181111561087b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806108a657607f821691505b6020821081141561081357634e487b7160e01b600052602260045260246000fd5b6000604082840312156108d957600080fd5b6040516040810181811067ffffffffffffffff8211171561090a57634e487b7160e01b600052604160045260246000fd5b8060405250809150825161091d8161076b565b8152602092830151920191909152919050565b60006040828403121561094257600080fd5b61079d83836108c7565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461097a57600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156109b2576109b2610989565b500190565b6000828210156109c9576109c9610989565b50039056fea26469706673582212207079d3ed11e68a35a26bdd334bed253d4952ff105a795f7452a91910a0206a3564736f6c634300080c0033`,
  BytecodeLen: 3405,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:48:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Contractor": Contractor,
  "Swapper": Swapper
  };
export const _APIs = {
  };
