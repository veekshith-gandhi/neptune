import moment from "moment";
import { FunctionComponent } from "react";
import I18 from "../../../../../i18";
import { DashboardTableProps, HotelList } from "../modal";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const DashboardTable: FunctionComponent<DashboardTableProps> = (props) => {
	
	return (		
		props.loading ? 
			<div className="d-flex align-items-center justify-content-center">
				<I18 tkey="Loading..." /> 
			</div>
			: 
			<table className="custom_table">
				<thead>
					<tr>
						<th>

						</th>
						<th>
							<I18 tkey="Hotel Name" />
						</th>
						<th>
							<I18 tkey="Hotel Star" />
						</th>
						<th>
							<I18 tkey="Location" />
						</th>
						<th>
							<I18 tkey="State" />
						</th>
						<th>
							<I18 tkey="Mobile" />
						</th>
						<th>
							<I18 tkey="Email" />
						</th>
						<th>
							<I18 tkey="Created Date" />
						</th>
						<th>
							<I18 tkey="Action" />
						</th>
					</tr>
				</thead>
				<tbody>
					{props.hotelList.length ? props.hotelList.map((el: HotelList, i: number) => {
						return (
							<tr key={`hotel_list_${i}`}>
								<td>

								</td>
								<td>
									{el.hotelName}
								</td>
								<td>
									{el.hotelStar}
								</td>
								<td>
									{el.location}
								</td>
								<td>
									{el.state}
								</td>
								<td>
									{el.mobile}
								</td>
								<td>
									{el.email}
								</td>
								<td>
									{moment(el.createdDate).format("DD/MM/YYYY")}
								</td>
								<td>
									<EditOutlined className="mr-2" />
									<DeleteOutlined />
								</td>
							</tr>
						);
					}) : ""}
				</tbody>
			</table>
	);
};

