import styles from './Login.css';

export default () => (
  <section>
    <style jsx>{styles}</style>
    <div className="columns">
      <div className="column is-three-quarters">
        <img src="/static/imgs/logo.png" alt="logo" />
        <button className="button">Holi Richi</button>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
