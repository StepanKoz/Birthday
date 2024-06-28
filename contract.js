const { TonClient, Address, beginCell, TupleItemSlice } = require("ton");

async function getPart(contractAddress, methodName) {
    const client = new TonClient({
        endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
    });

    try {
        const response = await client.runMethod(Address.parse(contractAddress), methodName, []);
        
       
        const message = response.stack.readString();
        
        console.log(`Message from ${methodName}:`, message);
    } catch (error) {
        console.error(`Error in ${methodName}:`, error);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const contractAddress = 'EQDdabkeai_cVLez6CD-10NfnvGyuvqMzKOCp-cEFhCeqQ0n';

async function callMethodsWithDelay() {
    const methods = ['get_part1', 'get_part2', 'get_part3', 'get_part4', 'get_part5', 'get_part6', 'get_part7'];

    for (const method of methods) {
        await getPart(contractAddress, method);
        await delay(1500); 
    }
}

callMethodsWithDelay();