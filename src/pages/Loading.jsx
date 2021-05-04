import style from '../styles/Loading.module.scss';

const Loading = () => {
  return (
    <div className={style.loader}>
      <img src="/images/Loading2.gif" alt="" />
    </div>
  );
};

export default Loading;
