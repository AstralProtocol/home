import React from "react";

const Projects = {
    logbook: {
        title: "Logbook",
        projectType: "dApp",
        description: <div>
            A decentralized application to tell place-based stories, built on the Location Proof Protocol.
        </div>,
        // demo: 'https://hyperaware.io/',
        github: "https://logbook.astral.global",
        "tech": [
            "eas",
            "scaffold-eth",
        ],
        hasImageBorder: false,
        "img_src": [
            "project-logbook"
        ],
    },
    hyperaware: {
        title: "Hyperaware",
        projectType: "sdApp",
        description: <div>
            A spatial governance protocol for connected devices: congestion zones running on smart contracts.
        </div>,
        // demo: 'https://hyperaware.io/',
        github: "https://github.com/wearehyperaware",
        "tech": [
            "solidity",
            "iot",
            "mobility"
        ],
        hasImageBorder: false,
        "img_src": [
            "project-hyperaware"
        ],
    },
    zkMaps: {
        title: "zkMaps",
        projectType: "Early work",
        description: <div>
            Zero-knowledge location proofs, an ETHDenver 2022 finalist.
        </div>,
        github: "https://github.com/zkMaps/zkMaps",
        "tech": [
            "solidity",
            "circom",
            "snark.js",
        ],
        hasImageBorder: false,
        "img_src": [
            "project-zkmaps"
        ],
    },
    web3Dashboard: {
        title: "Web3 Geospatial Dashboard",
        projectType: "dapp",
        description: <div>
           A dashboard to interact with raster satellite imagery stored on IPFS, accessed via STAC catalogs. Built by the EASIER Data Initiative
        </div>,
        // demo: "https://github.com/AstralProtocol/spatial-sol",
        github: "https://easierdata.org/updates/2024/2024-01-24-dashboard-showcase",
        "tech": [
            "IPFS",
            "STAC",
            "Mapbox"
        ],
        hasImageBorder: false,
        "img_src": [
            "project-web3-geospatial-dashboard"
        ],
    },
    spatialsol: {
        title: "Spatial.sol",
        projectType: "library",
        description: <div>
           A library of geometric and topological functions in Solidity.
        </div>,
        // demo: "https://github.com/AstralProtocol/spatial-sol",
        github: "https://github.com/AstralProtocol/spatial-sol",
        "tech": [
            "Solidity",
            "dev tools",
        ],
        hasImageBorder: false,
        "img_src": [
            "project-spatial"
        ],
    }, 
    Kolektivo: {
        title: "Kolektivo",
        projectType: "sdApp",
        description: <div>
            Decentralized Exchange Trading System Pilot on Curaçao.
        </div>,
        
        github: "https://github.com/Kolektivo/geonft-registry-poc",
        "tech": [
            "solidity",
            "dmrv",
            "local currencies"
        ],
        hasImageBorder: false,
        "img_src": [
            "project-kolektivo"
        ],
    }, 
    
    sprout: {
        title: "Sprout",
        projectType: "sdApp",
        description: <div>
            A sustainability-linked bond in Solidity: link loan terms to environmental metrics.
        </div>,

        github: "https://github.com/AstralProtocol/sprout",
        "tech": [
            "solidity",
            "remote sensing",
            "ReFi",
        ],
        hasImageBorder: false,
        "img_src": [
            "project-sprout"
        ],
    },
    // geolocker: {
    //     title: "Geolocker",
    //     projectType: "Early work",
    //     description: <div>
    //         A prototype spatial registry built on Ethereum.
    //     </div>,
    //     // readMore: "./geolocker",
    //     github: "https://github.com/johnx25bd/ethlondon",
    //     "tech": [
    //         "solidity",
    //         "spatial registries",
    //     ],
    //     hasImageBorder: false,
    //     "img_src": [
    //         "project-geolocker"
    //     ],
    // }
};

export default Projects;