import Image from 'next/image'
export default function BatchImage({asset, priority=false, portrait=false}) {
  return <figure style={{margin:'24px 0'}}>
    <Image src={asset.src} alt={asset.alt} title={asset.title} width={portrait?965:1672} height={portrait?1629:941} priority={priority} sizes={portrait?'(max-width:600px) 160px, 220px':'(max-width:800px) 100vw, 940px'} style={{display:'block',width:portrait?'min(220px,100%)':'100%',height:'auto',maxHeight:portrait?280:520,objectFit:portrait?'contain':'cover',borderRadius:4}} />
    <figcaption style={{fontSize:13,lineHeight:1.6,color:'#455d55',paddingTop:8}}>{asset.caption}</figcaption>
  </figure>
}
