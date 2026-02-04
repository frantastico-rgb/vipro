import React from 'react'
import ViproLogo from './ViproLogo'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  message?: string
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  message = 'Cargando experiencias...' 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      <div className="animate-pulse">
        <ViproLogo 
          size={size} 
          showText={false} 
          className="opacity-70" 
        />
      </div>
      
      {/* Indicador de carga circular alrededor del logo */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-vipro-warm border-t-vipro-earth rounded-full animate-spin"></div>
      </div>
      
      {message && (
        <p className="text-vipro-green text-sm font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  )
}

export default Loading