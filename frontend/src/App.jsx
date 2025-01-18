import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlangText from './translate/SlangText'

const App = () => {

  const mock = (`SINGAPORE – If you are looking for a new role and finding it hard to score an interview, you are not alone.

Six in 10 Singapore workers say their job search has become more difficult over the past year, according to new data from recruitment and professional network platform LinkedIn released on Jan 16.

This is higher than the global average of five in 10.


“The research results reflect the shifting market conditions and a sluggish labour market, as well as professionals’ sentiments towards job-seeking,” says Ms Feon Ang, managing director of LinkedIn Asia-Pacific. LinkedIn has more than four million members in Singapore.

LinkedIn’s latest jobs report polled 1,001 employed respondents and 500 human resources and talent acquisition professionals based in Singapore between Nov 27 and Dec 13. It is part of a global survey which spanned 15 other countries, including Australia, India and Indonesia. 

The data shows that professionals here spend one to two hours weekly on average on job hunting. Over half apply for up to five jobs a week. Millennials and Gen Zers can submit as many as eight applications weekly.

Nearly half (47 per cent) of Singapore-based respondents say they are applying to more jobs but receiving fewer callbacks. Almost one in two (48 per cent) have also been ghosted by recruiters, which makes it difficult for them to understand why they were rejected.

A digital marketing professional in her 30s says she tracked her job applications from January to December 2024 on an Excel sheet. She secured only three interviews after sending about 100 applications and has not received a single job offer.

The trouble is: For every job she applies for on LinkedIn, she is just one of hundreds who also did.

A career coach she saw advised her on her resume and told her to keep trying, which she felt was not particularly helpful. She attended a career fair recently in the hope of meeting hiring managers face to face, but was disappointed when she was directed, again, to apply online.

“It’s very competitive. Everyone’s playing a numbers game, and you’re not sure if an actual human will look at your CV (curriculum vitae) and take action,” says the job seeker, who quit her job in the third quarter of 2024 for personal reasons. She declined to be named.

Older workers are also feeling the pinch.`)

  return (
    <SlangText text={mock} />
  )
}

export default App
