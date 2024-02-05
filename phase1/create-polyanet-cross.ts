import yargs from "yargs/yargs";
import chalk from "chalk";

const argv = yargs(process.argv).argv as { candidateId?: string };

if (!argv.candidateId) {
  console.log(chalk.red("Error: candidate-id flag missing"));
  process.exit(1);
}

const refetcher = async (
  fetchInput: string,
  options?: RequestInit,
  retries = 0
): Promise<Response> => {
  try {
    const response = await fetch(fetchInput, options);
    const body = (await response.json()) as { error: boolean; message: string };
    if (response.status >= 400 || body.error) {
      throw body;
    }
    return response;
  } catch (e) {
    if (retries > 3) {
      throw e;
    }
    return refetcher(fetchInput, options, retries + 1);
  }
};

const addPolyanet = async (row: number, column: number) => {
  console.log(`Adding Polyanet in row: ${row}; column: ${column}`);
  try {
    await refetcher("https://challenge.crossmint.io/api/polyanets", {
      method: "POST",
      body: JSON.stringify({
        candidateId: argv.candidateId,
        row,
        column,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(
      chalk.green(
        `Successfuly added Polyanet in row: ${row}; column: ${column}`
      )
    );
  } catch (e) {
    console.log(
      chalk.red(`Failed to create Polyanet in row: ${row}; column: ${column}`),
      e
    );
  }
};

const createCross = async () => {
  for (let i = 2; i < 5; i += 1) {
    await addPolyanet(i, 10 - i);
    await addPolyanet(10 - i, i);
    await addPolyanet(10 - i, 10 - i);
    await addPolyanet(i, i);
  }
  await addPolyanet(5, 5);
};

createCross();
