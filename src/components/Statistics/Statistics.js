import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Statisctics', stats }) => {
  return (
    <>
      <section className={css.statistics}>
        <h2 class="title">Upload stats</h2>
        <ul className={css.statList}>
          {stats.map(data => (
            <li className={css.item} key={data.id}>
              <span className={css.label}>{data.label}</span>
              <span className={css.percentage}>{data.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
