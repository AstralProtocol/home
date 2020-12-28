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
        hasImageBorder: false,
        "img_src": [
            "project-hyperaware"
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
        hasImageBorder: false,
        "img_src": [
            "project-sprout"
        ],
    },
    toposol: {
        title: "Topo.sol",
        projectType: "library",
        description: <div>
           A library of geometric and topological functions in Solidity.
        </div>,
        readMore: "./topo",
        github: "https://github.com/johnx25bd/topo-sol",
        "tech": [
            "Solidity",
            "Ethereum",
            "Truffle",
        ],
        hasImageBorder: false,
        "img_src": [
            "project-topo"
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
        hasImageBorder: false,
        "img_src": [
            "project-geolocker"
        ],
    },
};

export default projects;