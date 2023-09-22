import Image from './Image.jsx'
import Title from './Title.jsx'
import Author from './Author.jsx'

const Greeting = () => {
    return (
<article className='book'>
    <Image/>
    <Title/>
    <Author/>
</article>
    )
}

export default Greeting;