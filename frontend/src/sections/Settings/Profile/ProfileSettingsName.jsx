import InputField from "components/InputField";

const ProfileSettingsName = ({value, onChange}) => {
  const rules = [
    {
      message: 'Incorrect entry.',
      rule: (value) => value.length !== 0,
    },
  ];

  return (
    <InputField
      sx={{marginBottom: "1rem"}}
      label="Name (required)"
      value={value}
      rules={rules}
      onChange={onChange}
    />
  )
};

export default ProfileSettingsName;
