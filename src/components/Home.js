import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-s.jpg"
				lftBtnText="Custom Order"
				rtBtnText="Existing inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-y.jpg"
				lftBtnText="Custom Order"
				rtBtnText="Existing inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-3.jpg"
				lftBtnText="Custom Order"
				rtBtnText="Existing inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-x.jpg"
				lftBtnText="Custom Order"
				rtBtnText="Existing inventory"
			/>
			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-back guarantee"
				backgroundImg="solar-panel.jpg"
				lftBtnText="Order now"
				rtBtnText="Learn more"
			/>
			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
				backgroundImg="solar-roof.jpg"
				lftBtnText="Order now"
				rtBtnText="Learn more"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				lftBtnText="Shop now"
			/>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	height: 100vh;
`;
