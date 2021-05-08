import { useTransition, animated } from 'react-spring'
import { formatCurrency } from '../utils/format-currency'

function AnimatedText({ text }) {
  const transitions = useTransition(text, text, {
    from: { transform: 'translate3d(0,-50px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-50px,0)', opacity: 0 },
  })

  return transitions.map(({ item, key, props }) => {
    return (
      <animated.div key={key} style={props} className="absolute">
        <h2 className="result-text font-extrabold text-6xl text-center mt-1">
          {formatCurrency(item)}
        </h2>
      </animated.div>
    )
  })
}

export default function Result({ value }) {
  return (
    <div className="relative min-h-16 h-20 text-center flex justify-center items-center">
      <AnimatedText text={value} />
    </div>
  )
}
