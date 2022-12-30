import { Button, Checkbox, Col, Form, Input, notification, Row, Select, Space } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import usePlacesAutocomplete from "use-places-autocomplete";
import { submitBasicLocationInfo } from "../../../../../services/hotel-form-api-service";
import { getCountryInfo } from "../../../../../services/state-country-api-service";
import { useAppSelector } from "../../../../../store";
import { apiErrorParser } from "../../../../../utils/error-parser";
import { addLocationHotelCreation } from "../redux/action";
import type { CountryEntity, HotelCreationLocationDetails } from "../types";

const { Search } = Input;
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 12 }
};
/*global , google*/
/*eslint no-undef: "error"*/
type PlacesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
};

export const FormDetails: FunctionComponent<any> = ({ setOffice }: PlacesProps) => {
	const { submitedId } = useAppSelector(state => state.hotel);
	const [countryStore, setCountryStore] = useState<CountryEntity[]>([]);
	const [selectedItem, setSelectedItem] = useState<string>("");
	const [api, contextHolder] = notification.useNotification();
	const dispatch = useDispatch();
	const {
		ready,
		value,
		setValue
	} = usePlacesAutocomplete(); 
	const [isDissabled, setIsDissabled] = useState(true);
	const onFinish = async (e: HotelCreationLocationDetails) => {
		try {
			await submitBasicLocationInfo<any>(
				{
					country: 3,
					address: e.address,
					pincode: e.pincode,
					city: e.city,
					state: 1
				},
				submitedId
			);
			dispatch(addLocationHotelCreation(e));
			api.success({ message: "saved Success", placement: "topRight" });
		} catch (error) {
			api.error({ message: apiErrorParser(error), placement: "topRight" });
		}
	};
	const checkBoxChecking = (e: any) => {
		e.target.checked ? setIsDissabled(false) : setIsDissabled(true);
	};

	// useEffect( async () => {
	// 	if (selectedItem) {
	// 		const data = await getStateInfo(selectedItem);
	// 	}
	// }, [selectedItem]);
	
	useEffect(() => {
		async function fetchData() {
			const { data } = await getCountryInfo();
			// console.log(data);
			setCountryStore(data);
		}
		fetchData();
	}, []);
	return (
		<Form
			autoComplete="off"
			style={{ padding: 24, minHeight: 360, background: "aliceblue" }}
			onFinish={onFinish}
			{...layout}
			layout="vertical"
			name="nest-messages"
		>
			{contextHolder}
			<Form.Item label="Search Location">
				<Search value={value} disabled={!ready} placeholder="Enter input" allowClear onChange={e => setValue(e.target.value)} />
			</Form.Item>
			<Row gutter={[8, 24]}>
				<Col span={8}>
					<Form.Item label="Latitude">
						<Input type="tel" placeholder="lat" allowClear />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Longitude">
						<Input type="tel" allowClear />
					</Form.Item>
				</Col>
			</Row>
			<Form.Item label="Locality">
				<Input type="Name" allowClear />
			</Form.Item>
			<Form.Item name={["address"]} label="Address" rules={[{ required: true }]}>
				<Input type="name" allowClear />
			</Form.Item>
			<Row gutter={[8, 24]}>
				<Col span={8}>
					<Form.Item label="Country" hasFeedback name={["country"]} rules={[{ required: true }]}>
						<Select
							showSearch
							placeholder="Country"
							value={selectedItem}
							filterOption={(input, option) => (option?.label ?? "").includes(input)}
							onChange={e => {
								setSelectedItem(e);
							}}
							options={countryStore.map((item: any) => ({ id: item.id, value: item.id, label: item.name }))}
						/>
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="State" name={["state"]} rules={[{ required: true }]}>
						<Input allowClear type="name" />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={[8, 24]}>
				<Col span={8}>
					<Form.Item label="City" name={["city"]} rules={[{ required: true }]}>
						<Input type="name" allowClear />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Pincode" name={["pincode"]} rules={[{ required: true }]}>
						<Input type="tel" allowClear />
					</Form.Item>
				</Col>
			</Row>
			<Form.Item name={["checked"]} rules={[{ required: true }]} valuePropName="checked">
				<Checkbox onChange={checkBoxChecking} value={"checked"}>
                    I agree to all your terms and condition
				</Checkbox>
			</Form.Item>
			<Form.Item>
				<Space>
					<Button type="primary" disabled={isDissabled} htmlType="submit">
                        Save and Submit
					</Button>
				</Space>
			</Form.Item>
		</Form>
	);
};