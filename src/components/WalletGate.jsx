import { motion } from 'framer-motion'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { slowFadeIn, fadeInUpSlow } from '../animations/emotionalAnimations'

const WalletGate = ({ onEnter, isConnected, onDirectEnter }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#0a0a0a' }}
      initial="initial"
      animate="animate"
      variants={slowFadeIn}
    >
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full"
        variants={fadeInUpSlow}
      >
        <motion.h1
          className="text-hero font-heading font-semibold mb-6 no-word-break"
          style={{ 
            letterSpacing: '-0.02em', 
            lineHeight: '1.2',
            color: '#4a9eff'
          }}
        >
          Konni Journeys Scroll Cheyyalem.
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-text-secondary mb-12 line-poetic"
          variants={fadeInUpSlow}
          transition={{ delay: 0.3 }}
        >
          Ee story chadavadaniki permission kaadhu…<br />
          Intent undali.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4"
          variants={fadeInUpSlow}
          transition={{ delay: 0.6 }}
        >
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== 'loading'
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated')

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <div className="flex flex-col items-center gap-4">
                          <button
                            onClick={openConnectModal}
                            type="button"
                            className="px-8 py-4 bg-dark-surface border border-accent/30 text-text-primary font-medium text-lg rounded-sm hover:border-accent/50 transition-all duration-300"
                          >
                            Connect Wallet to Enter
                          </button>
                          
                          <div className="flex items-center gap-3 my-2">
                            <div className="h-px bg-text-muted/30 flex-1" style={{ width: '80px' }}></div>
                            <span className="text-text-muted text-sm">or</span>
                            <div className="h-px bg-text-muted/30 flex-1" style={{ width: '80px' }}></div>
                          </div>

                          <button
                            onClick={onDirectEnter}
                            type="button"
                            className="px-8 py-4 bg-dark-surface/50 border border-text-muted/20 text-text-secondary font-medium text-base rounded-sm hover:border-text-muted/40 transition-all duration-300"
                          >
                            Continue Without Wallet
                          </button>
                        </div>
                      )
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          type="button"
                          className="px-8 py-4 bg-dark-surface border border-red-500/30 text-text-primary font-medium text-lg rounded-sm"
                        >
                          Wrong network
                        </button>
                      )
                    }

                    return (
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={openChainModal}
                            type="button"
                            className="px-6 py-3 bg-dark-surface border border-accent/20 rounded-sm text-text-secondary text-sm hover:border-accent/40 transition-colors"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 16,
                                  height: 16,
                                  borderRadius: 999,
                                  overflow: 'hidden',
                                  marginRight: 6,
                                  display: 'inline-block',
                                  verticalAlign: 'middle',
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 16, height: 16 }}
                                  />
                                )}
                              </div>
                            )}
                            {chain.name}
                          </button>

                          <button
                            onClick={openAccountModal}
                            type="button"
                            className="px-6 py-3 bg-dark-surface border border-accent/30 text-text-primary rounded-sm text-sm hover:border-accent/50 transition-colors"
                          >
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''}
                          </button>
                        </div>
                        
                        <button
                          onClick={onEnter}
                          type="button"
                          className="px-8 py-4 bg-dark-surface border border-accent/30 text-text-primary font-medium text-lg rounded-sm hover:border-accent/50 transition-all duration-300"
                        >
                          Enter Story
                        </button>
                      </div>
                    )
                  })()}
                </div>
              )
            }}
          </ConnectButton.Custom>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default WalletGate
