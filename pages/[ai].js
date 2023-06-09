import React, { useEffect } from 'react';
import { useState } from 'react';
import pageObj from '@/components/PageObj';
import UI3 from '@/components/UI3';

const ToolPage = ({ text, relatedArr }) => {
  const [prompt, setPromptData] = useState(text?.initalState);

  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [textCopy, setTextCopy] = useState(false);
  const [isLoading, setLoading] = useState(false);

  let initalNumberOfWords;
  let initalNumberOfMoney;

  const [numberOfWords, setNumberOfWords] = useState(initalNumberOfWords);
  const [moneySaved, setMoneySaved] = useState(initalNumberOfMoney);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localnumber = localStorage.getItem('numberOfWords');
      initalNumberOfWords = Number(localnumber) || 0;
      setNumberOfWords(initalNumberOfWords);
      const localMoney = localStorage.getItem('moneySaved') || 30;
      initalNumberOfMoney = Number(localMoney);
      setMoneySaved(initalNumberOfMoney);
    }
  }, [numberOfWords, moneySaved, initalNumberOfWords, initalNumberOfMoney]);

  const handleCopyText = () => {
    let copyText = document.getElementById('copy');
    let htmlcopydata = copyText.innerText;
    navigator.clipboard.writeText(htmlcopydata);
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
    }, 3500);
  };

  const handleClearText = (e) => {
    setData();
    window.location.reload();
  };

  const handleTitle = (e) => {
    setPromptData({ ...prompt, title: e.target.value });
  };

  const handleDescription = (e) => {
    setPromptData({ ...prompt, description: e.target.value });
  };

  const handleKeywords = (e) => {
    setPromptData({ ...prompt, keywords: e.target.value });
  };

  const handleLanguage = (e) => {
    setPromptData({ ...prompt, language: e.target.value });
  };

  const handleTone = (e) => {
    setPromptData({ ...prompt, tone: e.target.value });
  };

  const handleTime = (e) => {
    setPromptData({ ...prompt, time: e.target.value });
  };

  const handlePlatform = (e) => {
    setPromptData({ ...prompt, platform: e.target.value });
  };

  const getData = async () => {
    const response = await fetch('/api/getGPTdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt, slug: text.url }),
    });

    const resData = await response.json();

    console.log(resData, 'resData');

    const DataArr = resData.result.split('\n');
    console.log(DataArr);
    setData(DataArr);
    setPromptData(text?.initalState);
    setLoading(false);
  };

  const RandomNumberBetween = (min, max) => {
    let delta = max - min;
    return Math.round(min + Math.random() * delta);
  };

  const handleApi = (e) => {
    if (!prompt.title) {
      setErr(true);
    }
    if (prompt.title) {
      e.preventDefault();
      setLoading(true);
      setData();
      getData();
      if (mobile) {
        setShow(true);
        setHide(false);
      }
    }

    let newNumber = Number(numberOfWords + RandomNumberBetween(49, 299));
    let newMoney = Number(moneySaved + RandomNumberBetween(0.1, 0.9));

    setNumberOfWords(newNumber);
    setMoneySaved(newMoney);

    if (typeof window !== 'undefined') {
      localStorage.setItem('numberOfWords', newNumber);
      localStorage.setItem('moneySaved', newMoney);
    }
  };

  const handleClearFields = () => {
    setPromptData(text?.initalState);
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      let w = window.innerWidth;
      console.log(w);
      setMobile(true);
    }
  }, [mobile]);

  return (
    <UI3
      prompt={prompt}
      handleTitle={handleTitle}
      handleDescription={handleDescription}
      handleKeywords={handleKeywords}
      handleLanguage={handleLanguage}
      handleTone={handleTone}
      handleTime={handleTime}
      handleClearText={handleClearText}
      handleCopyText={handleCopyText}
      handleApi={handleApi}
      isLoading={isLoading}
      handleClearFields={handleClearFields}
      handlePlatform={handlePlatform}
      data={data}
      err={err}
      textCopy={textCopy}
      text={text}
      mobile={mobile}
      show={show}
      hide={hide}
      relatedArr={relatedArr}
      numberOfWords={numberOfWords}
      moneySaved={moneySaved}
    />
  );
};

export async function getStaticPaths() {
  let pathsArr = pageObj.map((el) => {
    return { params: { ai: el.url } };
  });
  return {
    paths: pathsArr,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let text = pageObj.find((el) => context.params.ai === el.url);
  let relatedArr = pageObj.filter((obj) => text.related?.includes(obj.url));

  return {
    props: { text, relatedArr },
  };
}

export default ToolPage;
