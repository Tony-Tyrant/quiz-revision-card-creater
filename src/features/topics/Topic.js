import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectTopic } from "./topicsSlice";
import { useSelector } from "react-redux";
import { selectQuiz } from "../quizzes/quizzesSlice";

export default function Topic() {
  const topics = useSelector(selectTopic); 
  const quizzes = useSelector(selectQuiz);
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
