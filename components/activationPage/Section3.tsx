import React from 'react'
import { Input } from '../UI/Input'
// const [positions, setPositions] = useState([{ position: "", startYear: "", endYear: "" }]);
interface Props {
  positions: {
    position: string
    startYear: string
    endYear: string
  }[]
  setPositions: (value: {
    position: string
    startYear: string
    endYear: string
  }[]) => void
}


const Section3 = (props: Props) => {
  const { positions, setPositions} = props

  const handlePositionChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const list = [...positions];
    // @ts-ignore
    list[index][name] = value;
    setPositions(list);
  };

  const handleAddPosition = () => {
    setPositions([...positions, { position: "", startYear: "", endYear: "" }]);
  };

  const handleRemovePosition = (index : number) => {
    const list = [...positions];
    list.splice(index, 1);
    setPositions(list);
  };
  return (
    <div className="my-4 w-full">
    <h2 className="text-lg font-bold mb-2">Academic or Professional Status</h2>
    <p className="text-gray-600 mb-4 text-sm dark:text-gray-400">
    Please let us know your current academic or professional status, such as undergraduate, graduate student, researcher, professor, or industry professional. This information will help us ensure that the content on our platform is of high quality and relevant to the academic and professional community.
    </p>
    {positions.map((position, index) => (
      <div key={index} className="flex flex-col mb-2">
        <label className="mb-2">{`Position ${index + 1}`}</label>
        <div className="flex gap-2 items-center mb-2">
          <div className="w-1/2">
          <Input label="Position" placeholder="Enter position" type="text" value={position.position} handleChange={(event) => handlePositionChange(index, event)} />
          </div>
          <div className="w-1/5">
          <Input label="Start Year" placeholder="YYYY" type="text" value={position.startYear} handleChange={(event) => handlePositionChange(index, event)} />
          </div>
          <div className="w-1/5">
          <Input label="End Year" placeholder="YYYY or Present" type="text" value={position.endYear} handleChange={(event) => handlePositionChange(index, event)} />
          </div>
          <div className="flex flex-1 text-right">
          <div className="flex items-center justify-center bg-green-500 text-white rounded-full w-6 h-6 cursor-pointer" onClick={handleAddPosition}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </div>
          {positions.length > 1 && (
            <div className="flex items-center justify-center bg-red-500 text-white rounded-full w-6 h-6 cursor-pointer ml-2" onClick={() => handleRemovePosition(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </div>
            )}
            </div>
          </div>
        </div>
      ))}
</div>
  )
}

export default Section3