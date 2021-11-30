import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createSubscriptions } from "../../services/subscriptions";
import DropDownVouchers from "../DropDownVouchers";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { listVouchers } from "../../services/vouchers";

const CreateSubscriptions = ({ handleClose }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [voucherId, setVoucherId] = useState("");
  const [mobile, setMobile] = useState("");
  const [vouchers, setVouchers] = useState([]);

  const handleSave = async (e) => {
    e.preventDefault();
    const payload = { email, name, mobile, voucherId };
    console.log("payload", payload);
    await createSubscriptions(payload);
    handleClose();
    history.push("/");
    // onSubmit(email, name, mobile);
  };

  useEffect(() => {
    const fetchVouchers = async () => {
      const data = await listVouchers();
      console.log(data[0], "0data****");
      setVouchers(
        data.map((voucher) => ({
          ...voucher,
          voucher: `NGN ${voucher.discountedPrice} for ${voucher.validity}`,
        }))
      );
    };
    fetchVouchers();
  }, []);

  // const handleSubmit = event => {
  //     event.preventDefault();
  //   };

  return (
    <form onSubmit={handleSave}>
      <FormControl id="email" isRequired>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          size="lg"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>

      <FormControl id="name" isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="name"
          placeholder="Full Name"
          size="lg"
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>

      <FormControl id="mobile" isRequired>
        <FormLabel>Mobile Number</FormLabel>
        <Input
          type="mobile"
          placeholder="Mobile number"
          size="lg"
          onChange={(event) => setMobile(event.target.value)}
        />
      </FormControl>

      <FormControl id="dropdown" isRequired>
        <FormLabel>Select voucher</FormLabel>
        <Select
          placeholder="Select option"
          name="voucherId"
          onChange={(event) => setVoucherId(event.target.value)}
        >
          {vouchers.map((option) => {
            return (
              <option
                value={option._id}
              >{`${option.discountedPrice} for ${option.validity}`}</option>
            );
          })}
        </Select>
      </FormControl>
      <Button colorScheme="green" mr={3} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateSubscriptions;

{
  /* <DropDownVouchers
                value={ voucherId }
                onChange={ (voucher) => setVoucherId(voucher._id) }
             /> */
}
