import Web3 from 'web3';

export default function PurchasedItemCard(props) {
  return (
    <>
      <div href="" className="relative block overflow-hidden rounded-2xl max-w-md">
        <img
          className="object-cover w-full h-56"
          // src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          src={props.avatarSrc}
          alt=""
        />

        <div className="p-4 bg-gray-900">
            <div className="flex flex-col">
            <p className="text-md pt-2 pb-2 font-bold text-white">Token Id: {props.id}</p>
            <h5 className="text-lg text-[#FA58B6] p-2">{props.title}</h5>
              <p className="text-xs text-gray-500">{props.description}</p>
              <p className="text-md pt-2 font-bold text-[#7A0BC0]">Bought: {props.totalSupply}</p>
            </div>
        </div>
      </div>
    </>
  );
}
