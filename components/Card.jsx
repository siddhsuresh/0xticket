import Web3 from 'web3';

export default function ItemCard(props) {
  const date = new Date(Date.now());
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
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
            <p className="text-sm pb-2 text-gray-300">{date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric", hour:"numeric", minute: "numeric"}) }</p>
              <p className="text-sm text-gray-500">{props.subtitle}</p>
              <h5 className="text-lg text-white">{props.title}</h5>
              <p className="text-sm text-[#7A0BC0]">Available: {props.available}/{props.totalSupply}</p>
            </div>
            <h3 className="text-sm font-bold text-[#FA58B6]">{Web3.utils.fromWei(props.price, 'ether')} MATIC</h3>
          </div>
        </div>
      </div>
    </>
  );
}
