import Address from '../../components/client/address/Address';
import AddressProvider from '../../contexts/providers/client/AddressProvider';

const AddressPage = props => {
  return (
    <main>
      <AddressProvider>
        <Address />
      </AddressProvider>
    </main>
  )
}

export default AddressPage;