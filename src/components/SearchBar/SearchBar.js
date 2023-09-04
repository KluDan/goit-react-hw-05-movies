import { BsSearch } from 'react-icons/bs';
import {
  SearchbarBlock,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ submitQuery }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.query.value;
    submitQuery(searchQuery);
    evt.target.reset();
  };

  return (
    <SearchbarBlock>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BsSearch size="32" />
        </SearchFormButton>
        <SearchFormInput type="text" name="query" placeholder="Search movie" />
      </SearchForm>
    </SearchbarBlock>
  );
};
