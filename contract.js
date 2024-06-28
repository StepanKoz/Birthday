const { TonClient, Address, beginCell, TupleItemSlice } = require("ton");

async function getMessage(contractAddress) {
    const client = new TonClient({
        endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
    });

    
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
        const response = await client.runMethod(Address.parse(contractAddress), "get_message", []);
        

        const message = response.stack.readString();
        
        console.log("Message from contract:", message);
    } catch (error) {
        console.error('Error:', error);
    }
}


const contractAddress = 'EQB2EUP5h8ECDd9lso82x-Vx-UdeNFIlTpuQWViGqf36tuqw';
getMessage(contractAddress);

