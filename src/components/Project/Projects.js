import React from "react";

const Projects = {
    Kolektivo: {
        title: "Kolektivo",
        projectType: "sdApp",
        description: <div>
            Decentralized Exchange Trading System Pilot on Curaçao.
        </div>,
        
        github: "https://github.com/astralprotocol",
        "tech": [
            "web3",
            "solidity",
            "celo"
        ],
        hasImageBorder: false,
        "img_src": [
            "project-kolektivo"
        ],
    },    
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
        readMore: "./sprout",
        github: "https://github.com/astralDAO/sprout",
        "tech": [
            "solidity",
            "hardhat",
            "the graph",
            "ethers",
            "ethereum",
            "web3",
        ],
        hasImageBorder: false,
        "img_src": [
            "project-sprout"
        ],
    },
    spatialsol: {
        title: "Spatial.sol",
        projectType: "library",
        description: <div>
           A library of geometric and topological functions in Solidity.
        </div>,
        demo: "https://github.com/AstralProtocol/spatial-sol",
        github: "https://github.com/AstralProtocol/spatial-sol",
        "tech": [
            "Solidity",
            "Ethereum",
            "Truffle",
        ],
        hasImageBorder: false,
        "img_src": [
            "project-spatial"
        ],
    },
    geolocker: {
        title: "Geolocker",
        projectType: "Early work",
        description: <div>
            A zone registry built on Ethereum and 3Box.
        </div>,
        readMore: "./geolocker",
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

export default Projects;