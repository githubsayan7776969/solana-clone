import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

const WalletConnectionProvider = ({ children }) => {
  const endpoint = useMemo(
    () =>
      "https://billowing-winter-sponge.solana-devnet.discover.quiknode.pro/595a1d5f8653de0e0becfed098ae674551c40d21/",
    []
  );
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default WalletConnectionProvider;