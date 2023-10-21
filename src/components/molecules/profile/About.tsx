import { Envelove } from "@/components/atoms";
import { Users } from "@/components/atoms/icon/Users";

export const About = () => {
  return (
    <div className="mt-6">
      <div>
        <h3 className="text-gray-800 font-bold text-sm">About</h3>
        <p className="text-gray-800 mt-2">
          Web3 startup with a team from all over the world. Need help with smart
          contracts? Launching NFT collections? come with us!
        </p>
      </div>

      {/* profile info */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span>
            <Envelove />
          </span>
          <span className="text-gray-600">gm@pixel8labs.com</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span>
            <Users />
          </span>
          <div>
            <span className="text-gray-800 font-bold ">821.320</span>
            <span className="text-gray-600 ml-2">profile visitor</span>
          </div>
        </div>
      </div>
    </div>
  );
};
