import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="btn btn-block hover:bg-stone-500 uppercase"
    >
      {isSubmitting ? (
        <p>
          <span className="loading loading-ring loading-lg"></span>
          submitting...
        </p>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};

export default SubmitBtn;
