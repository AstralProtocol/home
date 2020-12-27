import React from "react";

const projects = {
    hyperaware: {
        title: "Hyperaware",
        projectType: "sdApp",
        description: <div>
            A spatial governance protocol for connected devices: congestion zones running on smart contacts.
        </div>,
        demo: 'https://hyperaware.io/',
        github: "https://github.com/wearehyperaware",
        "tech": [
            "react",
            "iotex",
            "d3",
            "web3",
            "mapbox"
        ],
        hasImageBorder: true,
        imgType: "mp4",
        "img_src": [
            "project-currents-01"
        ],
    },
    sprout: {
        title: "Sprout",
        projectType: "sdApp",
        description: <div>
            A sustainability-linked bond in Solidity: link loan terms to environmental metrics
        </div>,
        github: "https://github.com/astralDAO/sprout",
        "tech": [
            "solidity",
            "hardhat",
            "thegraph",
            "ethers",
            "ethereum",
            "web3",
        ],
        hasImageBorder: true,
        "img_src": [
            "project-prist-01"
        ],
    },
    toposol: {
        title: "Topo.sol",
        projectType: "library",
        description: <div>
           A library of geometric and topological functions in Solidity.
        </div>,
        github: "https://github.com/johnx25bd/topo-sol",
        "tech": [
            "solidity",
            "ethereum",
            "truffle",
        ],
        "img_src": [
            "project-dvs-01"
        ],
    },
    geolocker: {
        title: "Geolocker",
        projectType: "sdApp",
        description: <div>
            A zone registry built on Ethereum and 3Box.
        </div>,
        github: "https://github.com/johnx25bd/ethlondon",
        "tech": [
            "react",
            "3box",
            "solidity",
            "mapbox",
            "turf"
        ],
        hasImageBorder: true,
        "img_src": [
            "project-data-retention-01"
        ],
    },
};

export default projects;